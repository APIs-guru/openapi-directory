import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://fec.gov/v1",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // GetAuditCase - 
This endpoint contains Final Audit Reports approved by the Commission since inception.
The search can be based on information about the audited committee (Name, FEC ID Number, Type, 
Election Cycle) or the issues covered in the report.

  GetAuditCase(
    req: operations.GetAuditCaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAuditCaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAuditCaseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/audit-case/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAuditCaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.auditCasePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAuditCategory - 
This lists the options for the categories and subcategories available in the /audit-search/ endpoint.

  GetAuditCategory(
    req: operations.GetAuditCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAuditCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAuditCategoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/audit-category/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAuditCategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.auditCategoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAuditPrimaryCategory - 
This lists the options for the primary categories available in the /audit-search/ endpoint.

  GetAuditPrimaryCategory(
    req: operations.GetAuditPrimaryCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAuditPrimaryCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAuditPrimaryCategoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/audit-primary-category/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAuditPrimaryCategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.auditPrimaryCategoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCalendarDates - 
Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State and report type filtering is no longer available.

  GetCalendarDates(
    req: operations.GetCalendarDatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCalendarDatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCalendarDatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/calendar-dates/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCalendarDatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.calendarDatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCalendarDatesExport - 
Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.

Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State filtering now applies to elections, reports and reporting periods.

Presidential pre-primary report due dates are not shown on even years.
Filers generally opt to file monthly rather than submit over 50 pre-primary election
reports. All reporting deadlines are available at /reporting-dates/ for reference.

This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
that creates the calendar.


  GetCalendarDatesExport(
    req: operations.GetCalendarDatesExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCalendarDatesExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCalendarDatesExportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/calendar-dates/export/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCalendarDatesExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.calendarDatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidateCandidateId - 
This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.

  GetCandidateCandidateId(
    req: operations.GetCandidateCandidateIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidateCandidateIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.candidateDetailPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidateCandidateIdCommittees - 
This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.

  GetCandidateCandidateIdCommittees(
    req: operations.GetCandidateCandidateIdCommitteesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdCommitteesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdCommitteesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/committees/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidateCandidateIdCommitteesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeDetailPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidateCandidateIdCommitteesHistory - 
Explore a filer's characteristics over time. This can be particularly useful if the
committees change treasurers, designation, or `committee_type`.

  GetCandidateCandidateIdCommitteesHistory(
    req: operations.GetCandidateCandidateIdCommitteesHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdCommitteesHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdCommitteesHistoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/committees/history/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidateCandidateIdCommitteesHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidateCandidateIdCommitteesHistoryCycle - 
Explore a filer's characteristics over time. This can be particularly useful if the
committees change treasurers, designation, or `committee_type`.

  GetCandidateCandidateIdCommitteesHistoryCycle(
    req: operations.GetCandidateCandidateIdCommitteesHistoryCycleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdCommitteesHistoryCycleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdCommitteesHistoryCycleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/committees/history/{cycle}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidateCandidateIdCommitteesHistoryCycleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidateCandidateIdFilings - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

  GetCandidateCandidateIdFilings(
    req: operations.GetCandidateCandidateIdFilingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdFilingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdFilingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/filings/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidateCandidateIdFilingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.filingsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidateCandidateIdHistory - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

  GetCandidateCandidateIdHistory(
    req: operations.GetCandidateCandidateIdHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdHistoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/history/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidateCandidateIdHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.candidateHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidateCandidateIdHistoryCycle - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

  GetCandidateCandidateIdHistoryCycle(
    req: operations.GetCandidateCandidateIdHistoryCycleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdHistoryCycleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdHistoryCycleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/history/{cycle}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidateCandidateIdHistoryCycleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.candidateHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidateCandidateIdTotals - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.


  GetCandidateCandidateIdTotals(
    req: operations.GetCandidateCandidateIdTotalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdTotalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdTotalsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/totals/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidateCandidateIdTotalsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeTotalsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidates - 
Fetch basic information about candidates, and use parameters to filter results to the
candidates you're looking for.

Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
particular office sought. If a candidate runs for the same office multiple times, the ID
stays the same. If the same person runs for another office — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

  GetCandidates(
    req: operations.GetCandidatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/candidates/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.candidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidatesSearch - 
Fetch basic information about candidates and their principal committees.

Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
particular office sought. If a candidate runs for the same office over time, that ID
stays the same. If the same person runs for multiple offices — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

The candidate endpoints primarily use data from FEC registration
[Form 1](http://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
[Form 2](http://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.

  GetCandidatesSearch(
    req: operations.GetCandidatesSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidatesSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidatesSearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/candidates/search/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidatesSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.candidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidatesTotals - 
Aggregated candidate receipts and disbursements grouped by cycle.

  GetCandidatesTotals(
    req: operations.GetCandidatesTotalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidatesTotalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidatesTotalsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/candidates/totals/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidatesTotalsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.candidateHistoryTotalPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidatesTotalsByOffice -  Aggregated candidate receipts and disbursements grouped by office by cycle.

  GetCandidatesTotalsByOffice(
    req: operations.GetCandidatesTotalsByOfficeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidatesTotalsByOfficeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidatesTotalsByOfficeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/candidates/totals/by_office/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidatesTotalsByOfficeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.totalByOfficePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCandidatesTotalsByOfficeByParty -  Aggregated candidate receipts and disbursements grouped by office by party by cycle.

  GetCandidatesTotalsByOfficeByParty(
    req: operations.GetCandidatesTotalsByOfficeByPartyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidatesTotalsByOfficeByPartyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidatesTotalsByOfficeByPartyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/candidates/totals/by_office/by_party/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCandidatesTotalsByOfficeByPartyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.totalByOfficeByPartyPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommitteeCommitteeId - 
This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.

  GetCommitteeCommitteeId(
    req: operations.GetCommitteeCommitteeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommitteeCommitteeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeDetailPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommitteeCommitteeIdCandidates - 
This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.

  GetCommitteeCommitteeIdCandidates(
    req: operations.GetCommitteeCommitteeIdCandidatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdCandidatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdCandidatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/candidates/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommitteeCommitteeIdCandidatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.candidateDetailPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommitteeCommitteeIdCandidatesHistory - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

  GetCommitteeCommitteeIdCandidatesHistory(
    req: operations.GetCommitteeCommitteeIdCandidatesHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdCandidatesHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdCandidatesHistoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/candidates/history/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommitteeCommitteeIdCandidatesHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.candidateHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommitteeCommitteeIdCandidatesHistoryCycle - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

  GetCommitteeCommitteeIdCandidatesHistoryCycle(
    req: operations.GetCommitteeCommitteeIdCandidatesHistoryCycleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdCandidatesHistoryCycleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdCandidatesHistoryCycleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/candidates/history/{cycle}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommitteeCommitteeIdCandidatesHistoryCycleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.candidateHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommitteeCommitteeIdFilings - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

  GetCommitteeCommitteeIdFilings(
    req: operations.GetCommitteeCommitteeIdFilingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdFilingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdFilingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/filings/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommitteeCommitteeIdFilingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.filingsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommitteeCommitteeIdHistory - 
Explore a filer's characteristics over time. This can be particularly useful if the
committees change treasurers, designation, or `committee_type`.

  GetCommitteeCommitteeIdHistory(
    req: operations.GetCommitteeCommitteeIdHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdHistoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/history/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommitteeCommitteeIdHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommitteeCommitteeIdHistoryCycle - 
Explore a filer's characteristics over time. This can be particularly useful if the
committees change treasurers, designation, or `committee_type`.

  GetCommitteeCommitteeIdHistoryCycle(
    req: operations.GetCommitteeCommitteeIdHistoryCycleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdHistoryCycleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdHistoryCycleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/history/{cycle}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommitteeCommitteeIdHistoryCycleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommitteeCommitteeIdReports - 
Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

  GetCommitteeCommitteeIdReports(
    req: operations.GetCommitteeCommitteeIdReportsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdReportsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdReportsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/reports/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommitteeCommitteeIdReportsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeReportsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommitteeCommitteeIdTotals - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.


  GetCommitteeCommitteeIdTotals(
    req: operations.GetCommitteeCommitteeIdTotalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdTotalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdTotalsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/totals/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommitteeCommitteeIdTotalsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeTotalsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommittees - 
Fetch basic information about committees and filers. Use parameters to filter for
particular characteristics.


  GetCommittees(
    req: operations.GetCommitteesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/committees/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommitteesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommunicationCosts - 
52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.

  GetCommunicationCosts(
    req: operations.GetCommunicationCostsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommunicationCostsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommunicationCostsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/communication_costs/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommunicationCostsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.communicationCostPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommunicationCostsAggregates - Communication cost aggregated by candidate ID and committee ID.
  GetCommunicationCostsAggregates(
    req: operations.GetCommunicationCostsAggregatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommunicationCostsAggregatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommunicationCostsAggregatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/communication_costs/aggregates/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommunicationCostsAggregatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.communicationCostByCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommunicationCostsByCandidate - Communication cost aggregated by candidate ID and committee ID.
  GetCommunicationCostsByCandidate(
    req: operations.GetCommunicationCostsByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommunicationCostsByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommunicationCostsByCandidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/communication_costs/by_candidate/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommunicationCostsByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.communicationCostByCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommunicationCostsTotalsByCandidate - 
Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.

  GetCommunicationCostsTotalsByCandidate(
    req: operations.GetCommunicationCostsTotalsByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommunicationCostsTotalsByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommunicationCostsTotalsByCandidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/communication_costs/totals/by_candidate/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommunicationCostsTotalsByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.ccTotalsByCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEfileFilings - Basic information about electronic files coming into the FEC, posted as they are received.
  GetEfileFilings(
    req: operations.GetEfileFilingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEfileFilingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEfileFilingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/efile/filings/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEfileFilingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.eFilingsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEfileReportsHouseSenate - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

  GetEfileReportsHouseSenate(
    req: operations.GetEfileReportsHouseSenateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEfileReportsHouseSenateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEfileReportsHouseSenateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/efile/reports/house-senate/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEfileReportsHouseSenateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseF3FilingPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEfileReportsPacParty - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

  GetEfileReportsPacParty(
    req: operations.GetEfileReportsPacPartyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEfileReportsPacPartyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEfileReportsPacPartyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/efile/reports/pac-party/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEfileReportsPacPartyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseF3XFilingPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEfileReportsPresidential - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

  GetEfileReportsPresidential(
    req: operations.GetEfileReportsPresidentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEfileReportsPresidentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEfileReportsPresidentialRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/efile/reports/presidential/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEfileReportsPresidentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseF3PFilingPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetElectionDates - 
FEC election dates since 1995.

  GetElectionDates(
    req: operations.GetElectionDatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetElectionDatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetElectionDatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/election-dates/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetElectionDatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getElectionDatesDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetElectioneering - 
An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:

_The communication refers to a clearly identified federal candidate._

_The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._

_The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._

  GetElectioneering(
    req: operations.GetElectioneeringRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetElectioneeringResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetElectioneeringRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/electioneering/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetElectioneeringResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.electioneeringPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetElectioneeringAggregates - Electioneering communications costs aggregates
  GetElectioneeringAggregates(
    req: operations.GetElectioneeringAggregatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetElectioneeringAggregatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetElectioneeringAggregatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/electioneering/aggregates/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetElectioneeringAggregatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.electioneeringByCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetElectioneeringByCandidate - Electioneering costs aggregated by candidate
  GetElectioneeringByCandidate(
    req: operations.GetElectioneeringByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetElectioneeringByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetElectioneeringByCandidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/electioneering/by_candidate/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetElectioneeringByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.electioneeringByCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetElectioneeringTotalsByCandidate - 
Total electioneering communications spent on candidates by cycle
or candidate election year

  GetElectioneeringTotalsByCandidate(
    req: operations.GetElectioneeringTotalsByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetElectioneeringTotalsByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetElectioneeringTotalsByCandidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/electioneering/totals/by_candidate/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetElectioneeringTotalsByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.ecTotalsByCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetElections - 
Look at the top-level financial information for all candidates running for the same
office.

Choose a 2-year cycle, and `house`, `senate` or `presidential`.

If you are looking for a Senate seat, you will need to select the state using a two-letter
abbreviation.

House races require state and a two-digit district number.

Since this endpoint reflects financial information, it will only have candidates once they file
financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
candidates that filed to run for a particular seat.

  GetElections(
    req: operations.GetElectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetElectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetElectionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/elections/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetElectionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.electionPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetElectionsSearch - 
List elections by cycle, office, state, and district.

  GetElectionsSearch(
    req: operations.GetElectionsSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetElectionsSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetElectionsSearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/elections/search/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetElectionsSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.electionsListPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetElectionsSummary - 
List elections by cycle, office, state, and district.

  GetElectionsSummary(
    req: operations.GetElectionsSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetElectionsSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetElectionsSummaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/elections/summary/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetElectionsSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.electionSummary = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFilings - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

  GetFilings(
    req: operations.GetFilingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFilingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFilingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/filings/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFilingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.filingsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLegalSearch - 
Search legal documents by document type, or across all document types using keywords, parameter values and ranges.

  GetLegalSearch(
    req: operations.GetLegalSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLegalSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLegalSearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/legal/search/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLegalSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLegalSearchDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNamesAuditCandidates - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

  GetNamesAuditCandidates(
    req: operations.GetNamesAuditCandidatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesAuditCandidatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesAuditCandidatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/audit_candidates/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNamesAuditCandidatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.auditCandidateSearchList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNamesAuditCommittees - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

  GetNamesAuditCommittees(
    req: operations.GetNamesAuditCommitteesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesAuditCommitteesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesAuditCommitteesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/audit_committees/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNamesAuditCommitteesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.auditCommitteeSearchList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNamesCandidates - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

  GetNamesCandidates(
    req: operations.GetNamesCandidatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesCandidatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesCandidatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/candidates/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNamesCandidatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.candidateSearchList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNamesCommittees - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

  GetNamesCommittees(
    req: operations.GetNamesCommitteesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesCommitteesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesCommitteesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/committees/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNamesCommitteesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeSearchList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetOperationsLog - 
The Operations log contains details of each report loaded into the database. It is primarily
used as status check to determine when all of the data processes, from initial entry through
review are complete.

  GetOperationsLog(
    req: operations.GetOperationsLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOperationsLogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOperationsLogRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/operations-log/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetOperationsLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.operationsLogPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPresidentialContributionsByCandidate - 
Net receipts per candidate.

Filter with `contributor_state='US'` for national totals

  GetPresidentialContributionsByCandidate(
    req: operations.GetPresidentialContributionsByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPresidentialContributionsByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPresidentialContributionsByCandidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/presidential/contributions/by_candidate/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPresidentialContributionsByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.presidentialByCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPresidentialContributionsBySize - 
Contribution receipts by size per candidate.

Filter by candidate_id, election_year and/or size

  GetPresidentialContributionsBySize(
    req: operations.GetPresidentialContributionsBySizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPresidentialContributionsBySizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPresidentialContributionsBySizeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/presidential/contributions/by_size/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPresidentialContributionsBySizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.presidentialBySizePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPresidentialContributionsByState - 
Contribution receipts by state per candidate.

Filter by candidate_id and/or election_year

  GetPresidentialContributionsByState(
    req: operations.GetPresidentialContributionsByStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPresidentialContributionsByStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPresidentialContributionsByStateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/presidential/contributions/by_state/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPresidentialContributionsByStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.presidentialByStatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPresidentialCoverageEndDate - 
Coverage end date per candidate.

Filter by candidate_id and/or election_year

  GetPresidentialCoverageEndDate(
    req: operations.GetPresidentialCoverageEndDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPresidentialCoverageEndDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPresidentialCoverageEndDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/presidential/coverage_end_date/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPresidentialCoverageEndDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.presidentialCoveragePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPresidentialFinancialSummary - 
Financial summary per candidate.

Filter by candidate_id and/or election_year

  GetPresidentialFinancialSummary(
    req: operations.GetPresidentialFinancialSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPresidentialFinancialSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPresidentialFinancialSummaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/presidential/financial_summary/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPresidentialFinancialSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.presidentialSummaryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRadAnalyst - 
Use this endpoint to look up the RAD Analyst for a committee.

The mission of the Reports Analysis Division (RAD) is to ensure that
campaigns and political committees file timely and accurate reports that fully disclose
their financial activities.  RAD is responsible for reviewing statements and financial
reports filed by political committees participating in federal elections, providing
assistance and guidance to the committees to properly file their reports, and for taking
appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).

  GetRadAnalyst(
    req: operations.GetRadAnalystRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRadAnalystResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRadAnalystRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rad-analyst/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRadAnalystResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.radAnalystPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetReportingDates - 
FEC election dates since 1995.

  GetReportingDates(
    req: operations.GetReportingDatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportingDatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportingDatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/reporting-dates/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReportingDatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getReportingDatesDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetReportsEntityType - 
Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

  GetReportsEntityType(
    req: operations.GetReportsEntityTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportsEntityTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportsEntityTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/reports/{entity_type}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReportsEntityTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeReportsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleA - 
This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/).

​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.


  GetSchedulesScheduleA(
    req: operations.GetSchedulesScheduleARequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleARequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleAResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleAPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleAByEmployer - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s employer name. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

  GetSchedulesScheduleAByEmployer(
    req: operations.GetSchedulesScheduleAByEmployerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByEmployerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByEmployerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_employer/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleAByEmployerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleAByEmployerPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleAByOccupation - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s occupation. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

  GetSchedulesScheduleAByOccupation(
    req: operations.GetSchedulesScheduleAByOccupationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByOccupationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByOccupationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_occupation/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleAByOccupationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleAByOccupationPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleABySize - 
This endpoint provides individual contributions received by a committee, aggregated by size:

```
 - $200 and under
 - $200.01 - $499.99
 - $500 - $999.99
 - $1000 - $1999.99
 - $2000 +
```

The $200.00 and under category includes contributions of $200 or less combined with unitemized individual contributions.

  GetSchedulesScheduleABySize(
    req: operations.GetSchedulesScheduleABySizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleABySizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleABySizeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_size/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleABySizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleABySizePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleABySizeByCandidate - 
This endpoint provides itemized individual contributions received by a committee, aggregated by size of contribution and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

  GetSchedulesScheduleABySizeByCandidate(
    req: operations.GetSchedulesScheduleABySizeByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleABySizeByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleABySizeByCandidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_size/by_candidate/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleABySizeByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleABySizeCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleAByState - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s state. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

  GetSchedulesScheduleAByState(
    req: operations.GetSchedulesScheduleAByStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByStateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_state/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleAByStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleAByStatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleAByStateByCandidate - 
This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

  GetSchedulesScheduleAByStateByCandidate(
    req: operations.GetSchedulesScheduleAByStateByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByStateByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByStateByCandidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_state/by_candidate/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleAByStateByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleAByStateCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleAByStateByCandidateTotals - 
Itemized individual contributions aggregated by contributor’s state, candidate, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


  GetSchedulesScheduleAByStateByCandidateTotals(
    req: operations.GetSchedulesScheduleAByStateByCandidateTotalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByStateByCandidateTotalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByStateByCandidateTotalsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_state/by_candidate/totals/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleAByStateByCandidateTotalsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleAByStateCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleAByStateTotals - 
This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

  GetSchedulesScheduleAByStateTotals(
    req: operations.GetSchedulesScheduleAByStateTotalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByStateTotalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByStateTotalsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_state/totals/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleAByStateTotalsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleAByStateRecipientTotalsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleAByZip - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s ZIP code. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

  GetSchedulesScheduleAByZip(
    req: operations.GetSchedulesScheduleAByZipRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByZipResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByZipRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_zip/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleAByZipResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleAByZipPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleAEfile - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

  GetSchedulesScheduleAEfile(
    req: operations.GetSchedulesScheduleAEfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAEfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAEfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/efile/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleAEfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleAEfilePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleASubId - 
This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/).

​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.


  GetSchedulesScheduleASubId(
    req: operations.GetSchedulesScheduleASubIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleASubIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleASubIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/schedules/schedule_a/{sub_id}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleASubIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleAPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleB - 
Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.

  GetSchedulesScheduleB(
    req: operations.GetSchedulesScheduleBRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleBResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleBPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleBByPurpose - 
Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
memoed items are not included.
Purpose is a combination of transaction codes, category codes and disbursement description.
Inspect the `disbursement_purpose` sql function within the migrations for more details.

  GetSchedulesScheduleBByPurpose(
    req: operations.GetSchedulesScheduleBByPurposeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBByPurposeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBByPurposeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/by_purpose/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleBByPurposeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleBByPurposePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleBByRecipient - 
Schedule B disbursements aggregated by recipient name. To avoid double counting,
memoed items are not included.

  GetSchedulesScheduleBByRecipient(
    req: operations.GetSchedulesScheduleBByRecipientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBByRecipientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBByRecipientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/by_recipient/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleBByRecipientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleBByRecipientPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleBByRecipientId - 
Schedule B disbursements aggregated by recipient committee ID, if applicable.
To avoid double counting, memoed items are not included.

  GetSchedulesScheduleBByRecipientId(
    req: operations.GetSchedulesScheduleBByRecipientIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBByRecipientIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBByRecipientIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/by_recipient_id/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleBByRecipientIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleBByRecipientIdPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleBEfile - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

  GetSchedulesScheduleBEfile(
    req: operations.GetSchedulesScheduleBEfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBEfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBEfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/efile/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleBEfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleBEfilePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleBSubId - 
Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.

  GetSchedulesScheduleBSubId(
    req: operations.GetSchedulesScheduleBSubIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBSubIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBSubIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/schedules/schedule_b/{sub_id}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleBSubIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleBPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleC - 
Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.

  GetSchedulesScheduleC(
    req: operations.GetSchedulesScheduleCRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleCResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleCRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_c/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleCResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSchedulesScheduleCDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleCSubId - 
Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.

  GetSchedulesScheduleCSubId(
    req: operations.GetSchedulesScheduleCSubIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleCSubIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleCSubIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/schedules/schedule_c/{sub_id}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleCSubIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSchedulesScheduleCSubIdDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleD - 
Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.



  GetSchedulesScheduleD(
    req: operations.GetSchedulesScheduleDRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleDResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleDRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_d/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleDResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSchedulesScheduleDDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleDSubId - 
Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.



  GetSchedulesScheduleDSubId(
    req: operations.GetSchedulesScheduleDSubIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleDSubIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleDSubIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/schedules/schedule_d/{sub_id}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleDSubIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSchedulesScheduleDSubIdDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleE - 
Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.

An independent expenditure is an expenditure for a communication "expressly advocating the election or
defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
a political party or its agents."

Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
`/schedule/schedule_e/`.

Due to the large quantity of Schedule E filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `expenditure_amount`, you might receive a page of
results with the following pagination information:

```
 "pagination": {
    "count": 152623,
    "last_indexes": {
      "last_index": "3023037",
      "last_expenditure_amount": -17348.5
    },
    "per_page": 20,
    "pages": 7632
  }
}
```

To fetch the next page of sorted results, append `last_index=3023037` and
`last_expenditure_amount=` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date,
e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
filtered out.  This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule E data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.

  GetSchedulesScheduleE(
    req: operations.GetSchedulesScheduleERequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleEResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleERequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_e/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleEResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleEPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleEByCandidate - 
Schedule E receipts aggregated by recipient candidate. To avoid double
counting, memoed items are not included.

  GetSchedulesScheduleEByCandidate(
    req: operations.GetSchedulesScheduleEByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleEByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleEByCandidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_e/by_candidate/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleEByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleEByCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleEEfile - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

  GetSchedulesScheduleEEfile(
    req: operations.GetSchedulesScheduleEEfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleEEfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleEEfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_e/efile/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleEEfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.scheduleEEfilePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleETotalsByCandidate - 
Total independent expenditure on supported or opposed candidates by cycle or candidate election year.

  GetSchedulesScheduleETotalsByCandidate(
    req: operations.GetSchedulesScheduleETotalsByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleETotalsByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleETotalsByCandidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_e/totals/by_candidate/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleETotalsByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.ieTotalsByCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleF - 
Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.

  GetSchedulesScheduleF(
    req: operations.GetSchedulesScheduleFRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleFResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleFRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_f/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleFResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSchedulesScheduleFDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesScheduleFSubId - 
Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.

  GetSchedulesScheduleFSubId(
    req: operations.GetSchedulesScheduleFSubIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleFSubIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleFSubIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/schedules/schedule_f/{sub_id}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesScheduleFSubIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSchedulesScheduleFSubIdDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStateElectionOffice - 
State laws and procedures govern elections for state or local offices as well as
how candidates appear on election ballots.
Contact the appropriate state election office for more information.

  GetStateElectionOffice(
    req: operations.GetStateElectionOfficeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStateElectionOfficeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStateElectionOfficeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/state-election-office/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetStateElectionOfficeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.stateElectionOfficeInfoPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTotalsByEntity - 
Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.

This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.

  GetTotalsByEntity(
    req: operations.GetTotalsByEntityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTotalsByEntityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTotalsByEntityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/totals/by_entity/";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTotalsByEntityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.entityReceiptDisbursementTotalsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTotalsEntityType - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.


  GetTotalsEntityType(
    req: operations.GetTotalsEntityTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTotalsEntityTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTotalsEntityTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/totals/{entity_type}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTotalsEntityTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.committeeTotalsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
