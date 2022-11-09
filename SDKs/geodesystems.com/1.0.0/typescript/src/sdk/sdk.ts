import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://geodesystems.com:443/",
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
  
  // MediaTabularExtractsheet - API for Extract sheets
  /** 
   * API to call: Extract sheets
  **/
  MediaTabularExtractsheet(
    req: operations.MediaTabularExtractsheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MediaTabularExtractsheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MediaTabularExtractsheetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/entry/show";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.MediaTabularExtractsheetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Search2017BoulderElectionExpenditures - Search API for '2017 Boulder Election Expenditures' entry type
  /** 
   * API to search for entries of type 2017 Boulder Election Expenditures
  **/
  Search2017BoulderElectionExpenditures(
    req: operations.Search2017BoulderElectionExpendituresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Search2017BoulderElectionExpendituresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Search2017BoulderElectionExpendituresRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/2017_boulder_election_expenditures";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.Search2017BoulderElectionExpendituresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchAny - Search API for 'Any file type' entry type
  /** 
   * API to search for entries of type Any file type
  **/
  SearchAny(
    req: operations.SearchAnyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchAnyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchAnyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/any";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchAnyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBeforeafter - Search API for 'Before and After Images' entry type
  /** 
   * API to search for entries of type Before and After Images
  **/
  SearchBeforeafter(
    req: operations.SearchBeforeafterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBeforeafterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBeforeafterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/beforeafter";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBeforeafterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBiblio - Search API for 'Bibliographic Entry' entry type
  /** 
   * API to search for entries of type Bibliographic Entry
  **/
  SearchBiblio(
    req: operations.SearchBiblioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBiblioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBiblioRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/biblio";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBiblioResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioDicom - Search API for 'DICOM File' entry type
  /** 
   * API to search for entries of type DICOM File
  **/
  SearchBioDicom(
    req: operations.SearchBioDicomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioDicomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioDicomRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_dicom";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioDicomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioDicomTest - Search API for 'DICOM Test File' entry type
  /** 
   * API to search for entries of type DICOM Test File
  **/
  SearchBioDicomTest(
    req: operations.SearchBioDicomTestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioDicomTestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioDicomTestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_dicom_test";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioDicomTestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioFasta - Search API for 'FASTA File' entry type
  /** 
   * API to search for entries of type FASTA File
  **/
  SearchBioFasta(
    req: operations.SearchBioFastaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioFastaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioFastaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_fasta";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioFastaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioFastq - Search API for 'FASTQ File' entry type
  /** 
   * API to search for entries of type FASTQ File
  **/
  SearchBioFastq(
    req: operations.SearchBioFastqRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioFastqResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioFastqRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_fastq";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioFastqResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioHmmerIndex - Search API for 'HMMER Index File' entry type
  /** 
   * API to search for entries of type HMMER Index File
  **/
  SearchBioHmmerIndex(
    req: operations.SearchBioHmmerIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioHmmerIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioHmmerIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_hmmer_index";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioHmmerIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioOmeTiff - Search API for 'OME TIFF File' entry type
  /** 
   * API to search for entries of type OME TIFF File
  **/
  SearchBioOmeTiff(
    req: operations.SearchBioOmeTiffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioOmeTiffResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioOmeTiffRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_ome_tiff";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioOmeTiffResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioOntologyAssay - Search API for 'Assay' entry type
  /** 
   * API to search for entries of type Assay
  **/
  SearchBioOntologyAssay(
    req: operations.SearchBioOntologyAssayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioOntologyAssayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioOntologyAssayRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_ontology_assay";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioOntologyAssayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioOntologyCohort - Search API for 'Cohort' entry type
  /** 
   * API to search for entries of type Cohort
  **/
  SearchBioOntologyCohort(
    req: operations.SearchBioOntologyCohortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioOntologyCohortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioOntologyCohortRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_ontology_cohort";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioOntologyCohortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioOntologyPerson - Search API for 'Person' entry type
  /** 
   * API to search for entries of type Person
  **/
  SearchBioOntologyPerson(
    req: operations.SearchBioOntologyPersonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioOntologyPersonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioOntologyPersonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_ontology_person";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioOntologyPersonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioOntologySample - Search API for 'Sample' entry type
  /** 
   * API to search for entries of type Sample
  **/
  SearchBioOntologySample(
    req: operations.SearchBioOntologySampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioOntologySampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioOntologySampleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_ontology_sample";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioOntologySampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioOntologySeries - Search API for 'Series' entry type
  /** 
   * API to search for entries of type Series
  **/
  SearchBioOntologySeries(
    req: operations.SearchBioOntologySeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioOntologySeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioOntologySeriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_ontology_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioOntologySeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioOntologyStudy - Search API for 'Study' entry type
  /** 
   * API to search for entries of type Study
  **/
  SearchBioOntologyStudy(
    req: operations.SearchBioOntologyStudyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioOntologyStudyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioOntologyStudyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_ontology_study";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioOntologyStudyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioSam - Search API for 'SAM Data' entry type
  /** 
   * API to search for entries of type SAM Data
  **/
  SearchBioSam(
    req: operations.SearchBioSamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioSamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioSamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_sam";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioSamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioSfPdb - Search API for 'PDB Protein File' entry type
  /** 
   * API to search for entries of type PDB Protein File
  **/
  SearchBioSfPdb(
    req: operations.SearchBioSfPdbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioSfPdbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioSfPdbRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_sf_pdb";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioSfPdbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioSra - Search API for 'Sequence Read Archive' entry type
  /** 
   * API to search for entries of type Sequence Read Archive
  **/
  SearchBioSra(
    req: operations.SearchBioSraRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioSraResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioSraRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_sra";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioSraResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioStockholm - Search API for 'Stockholm File' entry type
  /** 
   * API to search for entries of type Stockholm File
  **/
  SearchBioStockholm(
    req: operations.SearchBioStockholmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioStockholmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioStockholmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_stockholm";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioStockholmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBioTaxonomy - Search API for 'Taxonomic Entry' entry type
  /** 
   * API to search for entries of type Taxonomic Entry
  **/
  SearchBioTaxonomy(
    req: operations.SearchBioTaxonomyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBioTaxonomyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBioTaxonomyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bio_taxonomy";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBioTaxonomyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBlogentry - Search API for 'Weblog Entry' entry type
  /** 
   * API to search for entries of type Weblog Entry
  **/
  SearchBlogentry(
    req: operations.SearchBlogentryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBlogentryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBlogentryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/blogentry";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBlogentryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBolderRentalHousing - Search API for 'Boulder Rental Housing' entry type
  /** 
   * API to search for entries of type Boulder Rental Housing
  **/
  SearchBolderRentalHousing(
    req: operations.SearchBolderRentalHousingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBolderRentalHousingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBolderRentalHousingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bolder_rental_housing";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBolderRentalHousingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBookmarks - Search API for 'Bookmarks' entry type
  /** 
   * API to search for entries of type Bookmarks
  **/
  SearchBookmarks(
    req: operations.SearchBookmarksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBookmarksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBookmarksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/bookmarks";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBookmarksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBostonCrime - Search API for 'Boston Crime' entry type
  /** 
   * API to search for entries of type Boston Crime
  **/
  SearchBostonCrime(
    req: operations.SearchBostonCrimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBostonCrimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBostonCrimeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/boston_crime";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBostonCrimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBoulder2017ElectionContributions - Search API for 'Boulder 2017 Election Contributions' entry type
  /** 
   * API to search for entries of type Boulder 2017 Election Contributions
  **/
  SearchBoulder2017ElectionContributions(
    req: operations.SearchBoulder2017ElectionContributionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBoulder2017ElectionContributionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBoulder2017ElectionContributionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/boulder_2017_election_contributions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBoulder2017ElectionContributionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBoulderCampaignContributions - Search API for 'Boulder Campaign Contributions' entry type
  /** 
   * API to search for entries of type Boulder Campaign Contributions
  **/
  SearchBoulderCampaignContributions(
    req: operations.SearchBoulderCampaignContributionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBoulderCampaignContributionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBoulderCampaignContributionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/boulder_campaign_contributions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBoulderCampaignContributionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBoulderConsultingServices - Search API for 'Boulder Consulting Services Database' entry type
  /** 
   * API to search for entries of type Boulder Consulting Services Database
  **/
  SearchBoulderConsultingServices(
    req: operations.SearchBoulderConsultingServicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBoulderConsultingServicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBoulderConsultingServicesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/boulder_consulting_services";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBoulderConsultingServicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBoulderCountyVoterDetails - Search API for 'Boulder County Voter Details' entry type
  /** 
   * API to search for entries of type Boulder County Voter Details
  **/
  SearchBoulderCountyVoterDetails(
    req: operations.SearchBoulderCountyVoterDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBoulderCountyVoterDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBoulderCountyVoterDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/boulder_county_voter_details";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBoulderCountyVoterDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBoulderCrimes - Search API for 'Boulder Crime Reports' entry type
  /** 
   * API to search for entries of type Boulder Crime Reports
  **/
  SearchBoulderCrimes(
    req: operations.SearchBoulderCrimesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBoulderCrimesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBoulderCrimesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/boulder_crimes";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBoulderCrimesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBoulderEmails - Search API for 'Boulder Council Emails' entry type
  /** 
   * API to search for entries of type Boulder Council Emails
  **/
  SearchBoulderEmails(
    req: operations.SearchBoulderEmailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBoulderEmailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBoulderEmailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/boulder_emails";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBoulderEmailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchBoulderEmployeeSalaries - Search API for 'Boulder Employee Salaries' entry type
  /** 
   * API to search for entries of type Boulder Employee Salaries
  **/
  SearchBoulderEmployeeSalaries(
    req: operations.SearchBoulderEmployeeSalariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchBoulderEmployeeSalariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchBoulderEmployeeSalariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/boulder_employee_salaries";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchBoulderEmployeeSalariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchCalendar - Search API for 'Calendar' entry type
  /** 
   * API to search for entries of type Calendar
  **/
  SearchCalendar(
    req: operations.SearchCalendarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCalendarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCalendarRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/calendar";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchCalendarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchCampaignDonors - Search API for 'Campaign Donors' entry type
  /** 
   * API to search for entries of type Campaign Donors
  **/
  SearchCampaignDonors(
    req: operations.SearchCampaignDonorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCampaignDonorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCampaignDonorsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/campaign_donors";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchCampaignDonorsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchCampaignExpenditures - Search API for 'Campaign Expenditures' entry type
  /** 
   * API to search for entries of type Campaign Expenditures
  **/
  SearchCampaignExpenditures(
    req: operations.SearchCampaignExpendituresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCampaignExpendituresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCampaignExpendituresRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/campaign_expenditures";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchCampaignExpendituresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchCataloglink - Search API for 'Catalog Link' entry type
  /** 
   * API to search for entries of type Catalog Link
  **/
  SearchCataloglink(
    req: operations.SearchCataloglinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCataloglinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCataloglinkRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/cataloglink";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchCataloglinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchCdmGrid - Search API for 'Gridded Data File' entry type
  /** 
   * API to search for entries of type Gridded Data File
  **/
  SearchCdmGrid(
    req: operations.SearchCdmGridRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCdmGridResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCdmGridRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/cdm_grid";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchCdmGridResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchChatroom - Search API for 'Chat Room' entry type
  /** 
   * API to search for entries of type Chat Room
  **/
  SearchChatroom(
    req: operations.SearchChatroomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchChatroomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchChatroomRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/chatroom";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchChatroomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchColoradoWaterRights - Search API for 'Colorado Water Rights' entry type
  /** 
   * API to search for entries of type Colorado Water Rights
  **/
  SearchColoradoWaterRights(
    req: operations.SearchColoradoWaterRightsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchColoradoWaterRightsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchColoradoWaterRightsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/colorado_water_rights";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchColoradoWaterRightsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchCommitteeDonations - Search API for 'Committee Donations' entry type
  /** 
   * API to search for entries of type Committee Donations
  **/
  SearchCommitteeDonations(
    req: operations.SearchCommitteeDonationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCommitteeDonationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCommitteeDonationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/committee_donations";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchCommitteeDonationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchCommunityDatahub - Search API for 'Data Hub' entry type
  /** 
   * API to search for entries of type Data Hub
  **/
  SearchCommunityDatahub(
    req: operations.SearchCommunityDatahubRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCommunityDatahubResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCommunityDatahubRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/community_datahub";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchCommunityDatahubResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchCommunityResource - Search API for 'Facility' entry type
  /** 
   * API to search for entries of type Facility
  **/
  SearchCommunityResource(
    req: operations.SearchCommunityResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCommunityResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCommunityResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/community_resource";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchCommunityResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchConstructionPermits - Search API for 'Construction Permits' entry type
  /** 
   * API to search for entries of type Construction Permits
  **/
  SearchConstructionPermits(
    req: operations.SearchConstructionPermitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchConstructionPermitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchConstructionPermitsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/construction_permits";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchConstructionPermitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchContact - Search API for 'Contact List' entry type
  /** 
   * API to search for entries of type Contact List
  **/
  SearchContact(
    req: operations.SearchContactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchContactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchContactRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/contact";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchContactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchDbCoIndicators - Search API for 'Colorado Health Indicators' entry type
  /** 
   * API to search for entries of type Colorado Health Indicators
  **/
  SearchDbCoIndicators(
    req: operations.SearchDbCoIndicatorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchDbCoIndicatorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchDbCoIndicatorsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/db_co_indicators";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchDbCoIndicatorsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchEarthSatelliteLandsat - Search API for 'Landsat Satellite Data' entry type
  /** 
   * API to search for entries of type Landsat Satellite Data
  **/
  SearchEarthSatelliteLandsat(
    req: operations.SearchEarthSatelliteLandsatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchEarthSatelliteLandsatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchEarthSatelliteLandsatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/earth_satellite_landsat";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchEarthSatelliteLandsatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchFaq - Search API for 'FAQ' entry type
  /** 
   * API to search for entries of type FAQ
  **/
  SearchFaq(
    req: operations.SearchFaqRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchFaqResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchFaqRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/faq";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchFaqResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchFecPacs - Search API for 'FEC PACs' entry type
  /** 
   * API to search for entries of type FEC PACs
  **/
  SearchFecPacs(
    req: operations.SearchFecPacsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchFecPacsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchFecPacsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/fec_pacs";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchFecPacsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchFeccandidates - Search API for 'Candidates' entry type
  /** 
   * API to search for entries of type Candidates
  **/
  SearchFeccandidates(
    req: operations.SearchFeccandidatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchFeccandidatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchFeccandidatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/feccandidates";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchFeccandidatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchFeed - Search API for 'RSS/ATOM Feed' entry type
  /** 
   * API to search for entries of type RSS/ATOM Feed
  **/
  SearchFeed(
    req: operations.SearchFeedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchFeedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchFeedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/feed";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchFeedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchFile - Search API for 'File' entry type
  /** 
   * API to search for entries of type File
  **/
  SearchFile(
    req: operations.SearchFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/file";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchFitsData - Search API for 'FITS Data File' entry type
  /** 
   * API to search for entries of type FITS Data File
  **/
  SearchFitsData(
    req: operations.SearchFitsDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchFitsDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchFitsDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/fits_data";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchFitsDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchFtp - Search API for 'Remote FTP File View' entry type
  /** 
   * API to search for entries of type Remote FTP File View
  **/
  SearchFtp(
    req: operations.SearchFtpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchFtpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchFtpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/ftp";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchFtpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGadgetsCountdown - Search API for 'Countdown' entry type
  /** 
   * API to search for entries of type Countdown
  **/
  SearchGadgetsCountdown(
    req: operations.SearchGadgetsCountdownRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGadgetsCountdownResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGadgetsCountdownRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/gadgets_countdown";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGadgetsCountdownResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGadgetsStock - Search API for 'Stock Ticker' entry type
  /** 
   * API to search for entries of type Stock Ticker
  **/
  SearchGadgetsStock(
    req: operations.SearchGadgetsStockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGadgetsStockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGadgetsStockRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/gadgets_stock";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGadgetsStockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGadgetsWeather - Search API for 'Weather' entry type
  /** 
   * API to search for entries of type Weather
  **/
  SearchGadgetsWeather(
    req: operations.SearchGadgetsWeatherRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGadgetsWeatherResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGadgetsWeatherRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/gadgets_weather";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGadgetsWeatherResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGazeteerCensusTracts - Search API for 'Census Tracts' entry type
  /** 
   * API to search for entries of type Census Tracts
  **/
  SearchGazeteerCensusTracts(
    req: operations.SearchGazeteerCensusTractsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGazeteerCensusTractsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGazeteerCensusTractsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/gazeteer_census_tracts";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGazeteerCensusTractsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGazeteerCounties - Search API for 'Census Gazeteer Counties' entry type
  /** 
   * API to search for entries of type Census Gazeteer Counties
  **/
  SearchGazeteerCounties(
    req: operations.SearchGazeteerCountiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGazeteerCountiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGazeteerCountiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/gazeteer_counties";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGazeteerCountiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGeoGeojson - Search API for 'GeoJson File' entry type
  /** 
   * API to search for entries of type GeoJson File
  **/
  SearchGeoGeojson(
    req: operations.SearchGeoGeojsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGeoGeojsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGeoGeojsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/geo_geojson";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGeoGeojsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGeoGeotiff - Search API for 'GeoTIFF' entry type
  /** 
   * API to search for entries of type GeoTIFF
  **/
  SearchGeoGeotiff(
    req: operations.SearchGeoGeotiffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGeoGeotiffResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGeoGeotiffRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/geo_geotiff";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGeoGeotiffResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGeoGpx - Search API for 'GPX GPS File' entry type
  /** 
   * API to search for entries of type GPX GPS File
  **/
  SearchGeoGpx(
    req: operations.SearchGeoGpxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGeoGpxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGeoGpxRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/geo_gpx";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGeoGpxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGeoHdf5 - Search API for 'HDF5 File' entry type
  /** 
   * API to search for entries of type HDF5 File
  **/
  SearchGeoHdf5(
    req: operations.SearchGeoHdf5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGeoHdf5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGeoHdf5Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/geo_hdf5";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGeoHdf5Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGeoKml - Search API for 'KML/KMZ File' entry type
  /** 
   * API to search for entries of type KML/KMZ File
  **/
  SearchGeoKml(
    req: operations.SearchGeoKmlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGeoKmlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGeoKmlRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/geo_kml";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGeoKmlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGeoShapefile - Search API for 'Shapefile' entry type
  /** 
   * API to search for entries of type Shapefile
  **/
  SearchGeoShapefile(
    req: operations.SearchGeoShapefileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGeoShapefileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGeoShapefileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/geo_shapefile";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGeoShapefileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGeoShapefileFips - Search API for 'Shapefile with FIPS Code' entry type
  /** 
   * API to search for entries of type Shapefile with FIPS Code
  **/
  SearchGeoShapefileFips(
    req: operations.SearchGeoShapefileFipsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGeoShapefileFipsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGeoShapefileFipsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/geo_shapefile_fips";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGeoShapefileFipsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGlossary - Search API for 'Glossary' entry type
  /** 
   * API to search for entries of type Glossary
  **/
  SearchGlossary(
    req: operations.SearchGlossaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGlossaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGlossaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/glossary";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGlossaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGridaggregation - Search API for 'Grid Aggregation' entry type
  /** 
   * API to search for entries of type Grid Aggregation
  **/
  SearchGridaggregation(
    req: operations.SearchGridaggregationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGridaggregationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGridaggregationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/gridaggregation";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGridaggregationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchGroup - Search API for 'Folder' entry type
  /** 
   * API to search for entries of type Folder
  **/
  SearchGroup(
    req: operations.SearchGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/group";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchHipchatGroup - Search API for 'HipChat Group' entry type
  /** 
   * API to search for entries of type HipChat Group
  **/
  SearchHipchatGroup(
    req: operations.SearchHipchatGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchHipchatGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchHipchatGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/hipchat_group";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchHipchatGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchHomepage - Search API for 'Home Page' entry type
  /** 
   * API to search for entries of type Home Page
  **/
  SearchHomepage(
    req: operations.SearchHomepageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchHomepageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchHomepageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/homepage";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchHomepageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchIncident - Search API for 'Incident' entry type
  /** 
   * API to search for entries of type Incident
  **/
  SearchIncident(
    req: operations.SearchIncidentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchIncidentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchIncidentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/incident";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchIncidentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchJeopardy - Search API for 'Jeopardy' entry type
  /** 
   * API to search for entries of type Jeopardy
  **/
  SearchJeopardy(
    req: operations.SearchJeopardyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchJeopardyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchJeopardyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/jeopardy";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchJeopardyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchLatlonimage - Search API for 'Lat-Lon Image' entry type
  /** 
   * API to search for entries of type Lat-Lon Image
  **/
  SearchLatlonimage(
    req: operations.SearchLatlonimageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchLatlonimageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchLatlonimageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/latlonimage";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchLatlonimageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchLidarCollection - Search API for 'LiDAR Collection' entry type
  /** 
   * API to search for entries of type LiDAR Collection
  **/
  SearchLidarCollection(
    req: operations.SearchLidarCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchLidarCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchLidarCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/lidar_collection";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchLidarCollectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchLidarLas - Search API for 'LAS Lidar Data' entry type
  /** 
   * API to search for entries of type LAS Lidar Data
  **/
  SearchLidarLas(
    req: operations.SearchLidarLasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchLidarLasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchLidarLasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/lidar_las";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchLidarLasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchLidarLvis - Search API for 'LVIS Lidar Data' entry type
  /** 
   * API to search for entries of type LVIS Lidar Data
  **/
  SearchLidarLvis(
    req: operations.SearchLidarLvisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchLidarLvisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchLidarLvisRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/lidar_lvis";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchLidarLvisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchLink - Search API for 'Link' entry type
  /** 
   * API to search for entries of type Link
  **/
  SearchLink(
    req: operations.SearchLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchLinkRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/link";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchLocalfiles - Search API for 'Server Side Files' entry type
  /** 
   * API to search for entries of type Server Side Files
  **/
  SearchLocalfiles(
    req: operations.SearchLocalfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchLocalfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchLocalfilesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/localfiles";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchLocalfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchLocations - Search API for 'Locations' entry type
  /** 
   * API to search for entries of type Locations
  **/
  SearchLocations(
    req: operations.SearchLocationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchLocationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchLocationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/locations";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchLocationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchMapGooglemap - Search API for 'Google Map URL' entry type
  /** 
   * API to search for entries of type Google Map URL
  **/
  SearchMapGooglemap(
    req: operations.SearchMapGooglemapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchMapGooglemapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchMapGooglemapRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/map_googlemap";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchMapGooglemapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchMediaAudiofile - Search API for 'Audio File' entry type
  /** 
   * API to search for entries of type Audio File
  **/
  SearchMediaAudiofile(
    req: operations.SearchMediaAudiofileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchMediaAudiofileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchMediaAudiofileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/media_audiofile";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchMediaAudiofileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchMediaImageloop - Search API for 'Image Loop' entry type
  /** 
   * API to search for entries of type Image Loop
  **/
  SearchMediaImageloop(
    req: operations.SearchMediaImageloopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchMediaImageloopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchMediaImageloopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/media_imageloop";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchMediaImageloopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchMediaPhotoalbum - Search API for 'Photo Album' entry type
  /** 
   * API to search for entries of type Photo Album
  **/
  SearchMediaPhotoalbum(
    req: operations.SearchMediaPhotoalbumRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchMediaPhotoalbumResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchMediaPhotoalbumRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/media_photoalbum";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchMediaPhotoalbumResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchMediaVideoChannel - Search API for 'Video Channel' entry type
  /** 
   * API to search for entries of type Video Channel
  **/
  SearchMediaVideoChannel(
    req: operations.SearchMediaVideoChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchMediaVideoChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchMediaVideoChannelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/media_video_channel";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchMediaVideoChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchMediaVideoQuicktime - Search API for 'Quicktime Video' entry type
  /** 
   * API to search for entries of type Quicktime Video
  **/
  SearchMediaVideoQuicktime(
    req: operations.SearchMediaVideoQuicktimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchMediaVideoQuicktimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchMediaVideoQuicktimeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/media_video_quicktime";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchMediaVideoQuicktimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchMediaYoutubevideo - Search API for 'YouTube Video' entry type
  /** 
   * API to search for entries of type YouTube Video
  **/
  SearchMediaYoutubevideo(
    req: operations.SearchMediaYoutubevideoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchMediaYoutubevideoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchMediaYoutubevideoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/media_youtubevideo";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchMediaYoutubevideoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchNotes - Search API for 'Notes' entry type
  /** 
   * API to search for entries of type Notes
  **/
  SearchNotes(
    req: operations.SearchNotesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchNotesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchNotesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/notes";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchNotesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchNotesJsonfile - Search API for 'Json File' entry type
  /** 
   * API to search for entries of type Json File
  **/
  SearchNotesJsonfile(
    req: operations.SearchNotesJsonfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchNotesJsonfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchNotesJsonfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/notes_jsonfile";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchNotesJsonfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchNotesNote - Search API for 'Note' entry type
  /** 
   * API to search for entries of type Note
  **/
  SearchNotesNote(
    req: operations.SearchNotesNoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchNotesNoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchNotesNoteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/notes_note";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchNotesNoteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchNotesNotebook - Search API for 'Notebook' entry type
  /** 
   * API to search for entries of type Notebook
  **/
  SearchNotesNotebook(
    req: operations.SearchNotesNotebookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchNotesNotebookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchNotesNotebookRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/notes_notebook";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchNotesNotebookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchNwsfeed - Search API for 'NWS Forecast Feed' entry type
  /** 
   * API to search for entries of type NWS Forecast Feed
  **/
  SearchNwsfeed(
    req: operations.SearchNwsfeedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchNwsfeedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchNwsfeedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/nwsfeed";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchNwsfeedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchOpendaplink - Search API for 'OPeNDAP Link' entry type
  /** 
   * API to search for entries of type OPeNDAP Link
  **/
  SearchOpendaplink(
    req: operations.SearchOpendaplinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchOpendaplinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchOpendaplinkRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/opendaplink";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchOpendaplinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchOwlClass - Search API for 'OWL Class' entry type
  /** 
   * API to search for entries of type OWL Class
  **/
  SearchOwlClass(
    req: operations.SearchOwlClassRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchOwlClassResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchOwlClassRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/owl.class";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchOwlClassResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchOwlOntology - Search API for 'OWL Ontology' entry type
  /** 
   * API to search for entries of type OWL Ontology
  **/
  SearchOwlOntology(
    req: operations.SearchOwlOntologyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchOwlOntologyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchOwlOntologyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/owl.ontology";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchOwlOntologyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchPasteitentry - Search API for 'Paste Text Entry' entry type
  /** 
   * API to search for entries of type Paste Text Entry
  **/
  SearchPasteitentry(
    req: operations.SearchPasteitentryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchPasteitentryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchPasteitentryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/pasteitentry";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchPasteitentryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchPointText - Search API for 'Text Point Data' entry type
  /** 
   * API to search for entries of type Text Point Data
  **/
  SearchPointText(
    req: operations.SearchPointTextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchPointTextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchPointTextRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/point_text";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchPointTextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchPoliceStopData - Search API for 'Police Stop Data' entry type
  /** 
   * API to search for entries of type Police Stop Data
  **/
  SearchPoliceStopData(
    req: operations.SearchPoliceStopDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchPoliceStopDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchPoliceStopDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/police_stop_data";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchPoliceStopDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchPoll - Search API for 'Poll' entry type
  /** 
   * API to search for entries of type Poll
  **/
  SearchPoll(
    req: operations.SearchPollRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchPollResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchPollRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/poll";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchPollResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectCampaign - Search API for 'Campaign' entry type
  /** 
   * API to search for entries of type Campaign
  **/
  SearchProjectCampaign(
    req: operations.SearchProjectCampaignRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectCampaignResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectCampaignRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_campaign";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectCampaignResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectCasestudy - Search API for 'Case Study' entry type
  /** 
   * API to search for entries of type Case Study
  **/
  SearchProjectCasestudy(
    req: operations.SearchProjectCasestudyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectCasestudyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectCasestudyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_casestudy";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectCasestudyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectContribution - Search API for 'Research Contribution' entry type
  /** 
   * API to search for entries of type Research Contribution
  **/
  SearchProjectContribution(
    req: operations.SearchProjectContributionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectContributionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectContributionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_contribution";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectContributionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectDataformat - Search API for 'Data Format' entry type
  /** 
   * API to search for entries of type Data Format
  **/
  SearchProjectDataformat(
    req: operations.SearchProjectDataformatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectDataformatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectDataformatRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_dataformat";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectDataformatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectDataset - Search API for 'Dataset' entry type
  /** 
   * API to search for entries of type Dataset
  **/
  SearchProjectDataset(
    req: operations.SearchProjectDatasetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectDatasetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectDatasetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_dataset";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectDatasetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectDeployment - Search API for 'Deployment' entry type
  /** 
   * API to search for entries of type Deployment
  **/
  SearchProjectDeployment(
    req: operations.SearchProjectDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectDeploymentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_deployment";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectExperiment - Search API for 'Experiment' entry type
  /** 
   * API to search for entries of type Experiment
  **/
  SearchProjectExperiment(
    req: operations.SearchProjectExperimentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectExperimentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectExperimentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_experiment";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectExperimentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectFieldnote - Search API for 'Field Note' entry type
  /** 
   * API to search for entries of type Field Note
  **/
  SearchProjectFieldnote(
    req: operations.SearchProjectFieldnoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectFieldnoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectFieldnoteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_fieldnote";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectFieldnoteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectGpsControlpoints - Search API for 'Control Points File' entry type
  /** 
   * API to search for entries of type Control Points File
  **/
  SearchProjectGpsControlpoints(
    req: operations.SearchProjectGpsControlpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectGpsControlpointsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectGpsControlpointsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_gps_controlpoints";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectGpsControlpointsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectGpsRaw - Search API for 'Raw GPS File' entry type
  /** 
   * API to search for entries of type Raw GPS File
  **/
  SearchProjectGpsRaw(
    req: operations.SearchProjectGpsRawRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectGpsRawResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectGpsRawRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_gps_raw";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectGpsRawResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectGpsRinex - Search API for 'RINEX File' entry type
  /** 
   * API to search for entries of type RINEX File
  **/
  SearchProjectGpsRinex(
    req: operations.SearchProjectGpsRinexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectGpsRinexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectGpsRinexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_gps_rinex";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectGpsRinexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectInstrument - Search API for 'Instrument Data Collection' entry type
  /** 
   * API to search for entries of type Instrument Data Collection
  **/
  SearchProjectInstrument(
    req: operations.SearchProjectInstrumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectInstrumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectInstrumentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_instrument";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectInstrumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectLearningResource - Search API for 'Teaching Resource' entry type
  /** 
   * API to search for entries of type Teaching Resource
  **/
  SearchProjectLearningResource(
    req: operations.SearchProjectLearningResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectLearningResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectLearningResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_learning_resource";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectLearningResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectMeeting - Search API for 'Meeting' entry type
  /** 
   * API to search for entries of type Meeting
  **/
  SearchProjectMeeting(
    req: operations.SearchProjectMeetingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectMeetingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectMeetingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_meeting";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectMeetingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectOrganization - Search API for 'Organization' entry type
  /** 
   * API to search for entries of type Organization
  **/
  SearchProjectOrganization(
    req: operations.SearchProjectOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectOrganizationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_organization";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectProgram - Search API for 'Program' entry type
  /** 
   * API to search for entries of type Program
  **/
  SearchProjectProgram(
    req: operations.SearchProjectProgramRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectProgramResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectProgramRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_program";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectProgramResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectProject - Search API for 'Project' entry type
  /** 
   * API to search for entries of type Project
  **/
  SearchProjectProject(
    req: operations.SearchProjectProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectProjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_project";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectProjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectService - Search API for 'Data Access Service' entry type
  /** 
   * API to search for entries of type Data Access Service
  **/
  SearchProjectService(
    req: operations.SearchProjectServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectServiceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_service";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectSite - Search API for 'Site' entry type
  /** 
   * API to search for entries of type Site
  **/
  SearchProjectSite(
    req: operations.SearchProjectSiteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectSiteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectSiteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_site";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectSiteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectSoftwarepackage - Search API for 'Software Tool' entry type
  /** 
   * API to search for entries of type Software Tool
  **/
  SearchProjectSoftwarepackage(
    req: operations.SearchProjectSoftwarepackageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectSoftwarepackageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectSoftwarepackageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_softwarepackage";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectSoftwarepackageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectStandardName - Search API for 'Standard Parameter Name' entry type
  /** 
   * API to search for entries of type Standard Parameter Name
  **/
  SearchProjectStandardName(
    req: operations.SearchProjectStandardNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectStandardNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectStandardNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_standard_name";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectStandardNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectSurveylocation - Search API for 'Survey Location' entry type
  /** 
   * API to search for entries of type Survey Location
  **/
  SearchProjectSurveylocation(
    req: operations.SearchProjectSurveylocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectSurveylocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectSurveylocationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_surveylocation";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectSurveylocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectTerm - Search API for 'Vocabulary Term' entry type
  /** 
   * API to search for entries of type Vocabulary Term
  **/
  SearchProjectTerm(
    req: operations.SearchProjectTermRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectTermResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectTermRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_term";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectTermResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectVisit - Search API for 'Site Visit' entry type
  /** 
   * API to search for entries of type Site Visit
  **/
  SearchProjectVisit(
    req: operations.SearchProjectVisitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectVisitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectVisitRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_visit";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectVisitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchProjectVocabulary - Search API for 'Vocabulary' entry type
  /** 
   * API to search for entries of type Vocabulary
  **/
  SearchProjectVocabulary(
    req: operations.SearchProjectVocabularyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchProjectVocabularyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchProjectVocabularyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/project_vocabulary";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchProjectVocabularyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchPropertySales - Search API for 'Property Sales' entry type
  /** 
   * API to search for entries of type Property Sales
  **/
  SearchPropertySales(
    req: operations.SearchPropertySalesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchPropertySalesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchPropertySalesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/property_sales";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchPropertySalesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchPropertydb - Search API for 'Property Database' entry type
  /** 
   * API to search for entries of type Property Database
  **/
  SearchPropertydb(
    req: operations.SearchPropertydbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchPropertydbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchPropertydbRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/propertydb";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchPropertydbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchPythonNotebook - Search API for 'IPython Notebook file' entry type
  /** 
   * API to search for entries of type IPython Notebook file
  **/
  SearchPythonNotebook(
    req: operations.SearchPythonNotebookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchPythonNotebookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchPythonNotebookRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/python_notebook";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchPythonNotebookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchSlackTeam - Search API for 'Slack Team' entry type
  /** 
   * API to search for entries of type Slack Team
  **/
  SearchSlackTeam(
    req: operations.SearchSlackTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchSlackTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchSlackTeamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/slack_team";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchSlackTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchStatusboard - Search API for 'Status Board' entry type
  /** 
   * API to search for entries of type Status Board
  **/
  SearchStatusboard(
    req: operations.SearchStatusboardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchStatusboardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchStatusboardRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/statusboard";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchStatusboardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchSunrisesunset - Search API for 'Sunrise/Sunset Display' entry type
  /** 
   * API to search for entries of type Sunrise/Sunset Display
  **/
  SearchSunrisesunset(
    req: operations.SearchSunrisesunsetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchSunrisesunsetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchSunrisesunsetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/sunrisesunset";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchSunrisesunsetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTasks - Search API for 'Tasks' entry type
  /** 
   * API to search for entries of type Tasks
  **/
  SearchTasks(
    req: operations.SearchTasksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTasksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTasksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/tasks";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTasksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTmdbmovies - Search API for 'Tmdb Movies' entry type
  /** 
   * API to search for entries of type Tmdb Movies
  **/
  SearchTmdbmovies(
    req: operations.SearchTmdbmoviesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTmdbmoviesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTmdbmoviesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/tmdbmovies";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTmdbmoviesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTodo - Search API for 'Todo' entry type
  /** 
   * API to search for entries of type Todo
  **/
  SearchTodo(
    req: operations.SearchTodoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTodoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTodoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/todo";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTodoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTripEvent - Search API for 'Event' entry type
  /** 
   * API to search for entries of type Event
  **/
  SearchTripEvent(
    req: operations.SearchTripEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTripEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTripEventRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/trip_event";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTripEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTripFlight - Search API for 'Flight Leg' entry type
  /** 
   * API to search for entries of type Flight Leg
  **/
  SearchTripFlight(
    req: operations.SearchTripFlightRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTripFlightResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTripFlightRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/trip_flight";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTripFlightResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTripHotel - Search API for 'Lodging' entry type
  /** 
   * API to search for entries of type Lodging
  **/
  SearchTripHotel(
    req: operations.SearchTripHotelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTripHotelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTripHotelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/trip_hotel";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTripHotelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTripReport - Search API for 'Trip Report' entry type
  /** 
   * API to search for entries of type Trip Report
  **/
  SearchTripReport(
    req: operations.SearchTripReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTripReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTripReportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/trip_report";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTripReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTripTrip - Search API for 'Trip' entry type
  /** 
   * API to search for entries of type Trip
  **/
  SearchTripTrip(
    req: operations.SearchTripTripRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTripTripResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTripTripRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/trip_trip";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTripTripResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeAwcMetar - Search API for 'AWC Weather Observations' entry type
  /** 
   * API to search for entries of type AWC Weather Observations
  **/
  SearchTypeAwcMetar(
    req: operations.SearchTypeAwcMetarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeAwcMetarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeAwcMetarRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_awc_metar";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeAwcMetarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeBizStockseries - Search API for 'Stock Ticker Data' entry type
  /** 
   * API to search for entries of type Stock Ticker Data
  **/
  SearchTypeBizStockseries(
    req: operations.SearchTypeBizStockseriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeBizStockseriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeBizStockseriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_biz_stockseries";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeBizStockseriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeBlsSeries - Search API for 'BLS Series' entry type
  /** 
   * API to search for entries of type BLS Series
  **/
  SearchTypeBlsSeries(
    req: operations.SearchTypeBlsSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeBlsSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeBlsSeriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_bls_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeBlsSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeBlsSurvey - Search API for 'BLS Survey' entry type
  /** 
   * API to search for entries of type BLS Survey
  **/
  SearchTypeBlsSurvey(
    req: operations.SearchTypeBlsSurveyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeBlsSurveyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeBlsSurveyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_bls_survey";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeBlsSurveyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeCensusAcs - Search API for 'US Census ACS Data' entry type
  /** 
   * API to search for entries of type US Census ACS Data
  **/
  SearchTypeCensusAcs(
    req: operations.SearchTypeCensusAcsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeCensusAcsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeCensusAcsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_census_acs";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeCensusAcsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeDaymet - Search API for 'Daymet Daily Weather' entry type
  /** 
   * API to search for entries of type Daymet Daily Weather
  **/
  SearchTypeDaymet(
    req: operations.SearchTypeDaymetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeDaymetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeDaymetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_daymet";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeDaymetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeDbTable - Search API for 'Database Table' entry type
  /** 
   * API to search for entries of type Database Table
  **/
  SearchTypeDbTable(
    req: operations.SearchTypeDbTableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeDbTableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeDbTableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_db_table";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeDbTableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeDocumentCsv - Search API for 'CSV File' entry type
  /** 
   * API to search for entries of type CSV File
  **/
  SearchTypeDocumentCsv(
    req: operations.SearchTypeDocumentCsvRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeDocumentCsvResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeDocumentCsvRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_document_csv";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeDocumentCsvResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeDocumentDoc - Search API for 'Word File' entry type
  /** 
   * API to search for entries of type Word File
  **/
  SearchTypeDocumentDoc(
    req: operations.SearchTypeDocumentDocRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeDocumentDocResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeDocumentDocRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_document_doc";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeDocumentDocResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeDocumentHtml - Search API for 'HTML File' entry type
  /** 
   * API to search for entries of type HTML File
  **/
  SearchTypeDocumentHtml(
    req: operations.SearchTypeDocumentHtmlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeDocumentHtmlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeDocumentHtmlRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_document_html";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeDocumentHtmlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeDocumentPdf - Search API for 'PDF File' entry type
  /** 
   * API to search for entries of type PDF File
  **/
  SearchTypeDocumentPdf(
    req: operations.SearchTypeDocumentPdfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeDocumentPdfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeDocumentPdfRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_document_pdf";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeDocumentPdfResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeDocumentPpt - Search API for 'Powerpoint File' entry type
  /** 
   * API to search for entries of type Powerpoint File
  **/
  SearchTypeDocumentPpt(
    req: operations.SearchTypeDocumentPptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeDocumentPptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeDocumentPptRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_document_ppt";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeDocumentPptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeDocumentXls - Search API for 'Excel File' entry type
  /** 
   * API to search for entries of type Excel File
  **/
  SearchTypeDocumentXls(
    req: operations.SearchTypeDocumentXlsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeDocumentXlsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeDocumentXlsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_document_xls";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeDocumentXlsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeDrilsdownCasestudy - Search API for 'Drilsdown Case Study' entry type
  /** 
   * API to search for entries of type Drilsdown Case Study
  **/
  SearchTypeDrilsdownCasestudy(
    req: operations.SearchTypeDrilsdownCasestudyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeDrilsdownCasestudyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeDrilsdownCasestudyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_drilsdown_casestudy";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeDrilsdownCasestudyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEdgarFiling - Search API for 'SEC EDGAR Filing' entry type
  /** 
   * API to search for entries of type SEC EDGAR Filing
  **/
  SearchTypeEdgarFiling(
    req: operations.SearchTypeEdgarFilingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEdgarFilingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEdgarFilingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_edgar_filing";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEdgarFilingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEiaCategory - Search API for 'EIA Category' entry type
  /** 
   * API to search for entries of type EIA Category
  **/
  SearchTypeEiaCategory(
    req: operations.SearchTypeEiaCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEiaCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEiaCategoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_eia_category";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEiaCategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEiaSeries - Search API for 'EIA Series' entry type
  /** 
   * API to search for entries of type EIA Series
  **/
  SearchTypeEiaSeries(
    req: operations.SearchTypeEiaSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEiaSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEiaSeriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_eia_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEiaSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEsriFeatureserver - Search API for 'ESRI Feature Server' entry type
  /** 
   * API to search for entries of type ESRI Feature Server
  **/
  SearchTypeEsriFeatureserver(
    req: operations.SearchTypeEsriFeatureserverRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEsriFeatureserverResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEsriFeatureserverRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_esri_featureserver";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEsriFeatureserverResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEsriGeometryserver - Search API for 'ESRI Geometry Server' entry type
  /** 
   * API to search for entries of type ESRI Geometry Server
  **/
  SearchTypeEsriGeometryserver(
    req: operations.SearchTypeEsriGeometryserverRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEsriGeometryserverResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEsriGeometryserverRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_esri_geometryserver";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEsriGeometryserverResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEsriGpserver - Search API for 'ESRI GP Server' entry type
  /** 
   * API to search for entries of type ESRI GP Server
  **/
  SearchTypeEsriGpserver(
    req: operations.SearchTypeEsriGpserverRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEsriGpserverResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEsriGpserverRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_esri_gpserver";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEsriGpserverResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEsriImageserver - Search API for 'ESRI Image Server' entry type
  /** 
   * API to search for entries of type ESRI Image Server
  **/
  SearchTypeEsriImageserver(
    req: operations.SearchTypeEsriImageserverRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEsriImageserverResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEsriImageserverRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_esri_imageserver";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEsriImageserverResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEsriLayer - Search API for 'ESRI Layer' entry type
  /** 
   * API to search for entries of type ESRI Layer
  **/
  SearchTypeEsriLayer(
    req: operations.SearchTypeEsriLayerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEsriLayerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEsriLayerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_esri_layer";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEsriLayerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEsriMapserver - Search API for 'ESRI Map Server' entry type
  /** 
   * API to search for entries of type ESRI Map Server
  **/
  SearchTypeEsriMapserver(
    req: operations.SearchTypeEsriMapserverRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEsriMapserverResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEsriMapserverRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_esri_mapserver";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEsriMapserverResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEsriRestfolder - Search API for 'ESRI Services Folder' entry type
  /** 
   * API to search for entries of type ESRI Services Folder
  **/
  SearchTypeEsriRestfolder(
    req: operations.SearchTypeEsriRestfolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEsriRestfolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEsriRestfolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_esri_restfolder";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEsriRestfolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEsriRestserver - Search API for 'ESRI Web Server' entry type
  /** 
   * API to search for entries of type ESRI Web Server
  **/
  SearchTypeEsriRestserver(
    req: operations.SearchTypeEsriRestserverRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEsriRestserverResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEsriRestserverRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_esri_restserver";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEsriRestserverResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeEsriRestservice - Search API for 'ESRI Rest Service' entry type
  /** 
   * API to search for entries of type ESRI Rest Service
  **/
  SearchTypeEsriRestservice(
    req: operations.SearchTypeEsriRestserviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeEsriRestserviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeEsriRestserviceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_esri_restservice";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeEsriRestserviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeExtremes - Search API for 'NOAA Extremes Data' entry type
  /** 
   * API to search for entries of type NOAA Extremes Data
  **/
  SearchTypeExtremes(
    req: operations.SearchTypeExtremesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeExtremesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeExtremesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_extremes";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeExtremesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeFredCategory - Search API for 'FRED Category' entry type
  /** 
   * API to search for entries of type FRED Category
  **/
  SearchTypeFredCategory(
    req: operations.SearchTypeFredCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeFredCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeFredCategoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_fred_category";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeFredCategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeFredSeries - Search API for 'FRED Series' entry type
  /** 
   * API to search for entries of type FRED Series
  **/
  SearchTypeFredSeries(
    req: operations.SearchTypeFredSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeFredSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeFredSeriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_fred_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeFredSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeGtfsAgency - Search API for 'Transit Agency' entry type
  /** 
   * API to search for entries of type Transit Agency
  **/
  SearchTypeGtfsAgency(
    req: operations.SearchTypeGtfsAgencyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeGtfsAgencyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeGtfsAgencyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_gtfs_agency";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeGtfsAgencyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeGtfsRoute - Search API for 'Transit Route' entry type
  /** 
   * API to search for entries of type Transit Route
  **/
  SearchTypeGtfsRoute(
    req: operations.SearchTypeGtfsRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeGtfsRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeGtfsRouteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_gtfs_route";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeGtfsRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeGtfsRoutes - Search API for 'Transit Route Collection' entry type
  /** 
   * API to search for entries of type Transit Route Collection
  **/
  SearchTypeGtfsRoutes(
    req: operations.SearchTypeGtfsRoutesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeGtfsRoutesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeGtfsRoutesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_gtfs_routes";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeGtfsRoutesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeGtfsStop - Search API for 'Transit Stop' entry type
  /** 
   * API to search for entries of type Transit Stop
  **/
  SearchTypeGtfsStop(
    req: operations.SearchTypeGtfsStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeGtfsStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeGtfsStopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_gtfs_stop";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeGtfsStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeGtfsStops - Search API for 'Transit Stop Collection' entry type
  /** 
   * API to search for entries of type Transit Stop Collection
  **/
  SearchTypeGtfsStops(
    req: operations.SearchTypeGtfsStopsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeGtfsStopsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeGtfsStopsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_gtfs_stops";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeGtfsStopsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeGtfsTrip - Search API for 'Transit Trip' entry type
  /** 
   * API to search for entries of type Transit Trip
  **/
  SearchTypeGtfsTrip(
    req: operations.SearchTypeGtfsTripRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeGtfsTripResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeGtfsTripRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_gtfs_trip";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeGtfsTripResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeHazarddata - Search API for 'Hazard Data' entry type
  /** 
   * API to search for entries of type Hazard Data
  **/
  SearchTypeHazarddata(
    req: operations.SearchTypeHazarddataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeHazarddataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeHazarddataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_hazarddata";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeHazarddataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeHydroColorado - Search API for 'Colorado DNR Stream Gage' entry type
  /** 
   * API to search for entries of type Colorado DNR Stream Gage
  **/
  SearchTypeHydroColorado(
    req: operations.SearchTypeHydroColoradoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeHydroColoradoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeHydroColoradoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_hydro_colorado";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeHydroColoradoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeIdvBundle - Search API for 'IDV Bundle' entry type
  /** 
   * API to search for entries of type IDV Bundle
  **/
  SearchTypeIdvBundle(
    req: operations.SearchTypeIdvBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeIdvBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeIdvBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_idv_bundle";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeIdvBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeImage - Search API for 'Image' entry type
  /** 
   * API to search for entries of type Image
  **/
  SearchTypeImage(
    req: operations.SearchTypeImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_image";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeImageAirport - Search API for 'Airport Image' entry type
  /** 
   * API to search for entries of type Airport Image
  **/
  SearchTypeImageAirport(
    req: operations.SearchTypeImageAirportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeImageAirportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeImageAirportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_image_airport";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeImageAirportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeImageWebcam - Search API for 'Webcam' entry type
  /** 
   * API to search for entries of type Webcam
  **/
  SearchTypeImageWebcam(
    req: operations.SearchTypeImageWebcamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeImageWebcamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeImageWebcamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_image_webcam";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeImageWebcamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeMb - Search API for 'MB Bathymetry' entry type
  /** 
   * API to search for entries of type MB Bathymetry
  **/
  SearchTypeMb(
    req: operations.SearchTypeMbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeMbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeMbRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_mb";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeMbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeMbCollection - Search API for 'Bathymetry Collection' entry type
  /** 
   * API to search for entries of type Bathymetry Collection
  **/
  SearchTypeMbCollection(
    req: operations.SearchTypeMbCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeMbCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeMbCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_mb_collection";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeMbCollectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeMbPointBasic - Search API for 'Basic MB point file' entry type
  /** 
   * API to search for entries of type Basic MB point file
  **/
  SearchTypeMbPointBasic(
    req: operations.SearchTypeMbPointBasicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeMbPointBasicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeMbPointBasicRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_mb_point_basic";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeMbPointBasicResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeMetametaDictionary - Search API for 'Metadata Dictionary' entry type
  /** 
   * API to search for entries of type Metadata Dictionary
  **/
  SearchTypeMetametaDictionary(
    req: operations.SearchTypeMetametaDictionaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeMetametaDictionaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeMetametaDictionaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_metameta_dictionary";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeMetametaDictionaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeMetametaField - Search API for 'Metadata Field' entry type
  /** 
   * API to search for entries of type Metadata Field
  **/
  SearchTypeMetametaField(
    req: operations.SearchTypeMetametaFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeMetametaFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeMetametaFieldRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_metameta_field";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeMetametaFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeNasaames - Search API for 'NASA AMES File' entry type
  /** 
   * API to search for entries of type NASA AMES File
  **/
  SearchTypeNasaames(
    req: operations.SearchTypeNasaamesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeNasaamesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeNasaamesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_nasaames";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeNasaamesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeNcss - Search API for 'NetCDF Point Subset' entry type
  /** 
   * API to search for entries of type NetCDF Point Subset
  **/
  SearchTypeNcss(
    req: operations.SearchTypeNcssRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeNcssResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeNcssRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_ncss";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeNcssResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeNitf - Search API for 'NITF File' entry type
  /** 
   * API to search for entries of type NITF File
  **/
  SearchTypeNitf(
    req: operations.SearchTypeNitfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeNitfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeNitfRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_nitf";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeNitfResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointAmerifluxLevel2 - Search API for 'Ameriflux Level 2 CSV File' entry type
  /** 
   * API to search for entries of type Ameriflux Level 2 CSV File
  **/
  SearchTypePointAmerifluxLevel2(
    req: operations.SearchTypePointAmerifluxLevel2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointAmerifluxLevel2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointAmerifluxLevel2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_ameriflux_level2";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointAmerifluxLevel2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointAmrcFinal - Search API for 'AMRC Final QC Data' entry type
  /** 
   * API to search for entries of type AMRC Final QC Data
  **/
  SearchTypePointAmrcFinal(
    req: operations.SearchTypePointAmrcFinalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointAmrcFinalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointAmrcFinalRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_amrc_final";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointAmrcFinalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointAmrcFreewave - Search API for 'AMRC Freewave  Data' entry type
  /** 
   * API to search for entries of type AMRC Freewave  Data
  **/
  SearchTypePointAmrcFreewave(
    req: operations.SearchTypePointAmrcFreewaveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointAmrcFreewaveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointAmrcFreewaveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_amrc_freewave";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointAmrcFreewaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointCzo - Search API for 'CZO Display File Format' entry type
  /** 
   * API to search for entries of type CZO Display File Format
  **/
  SearchTypePointCzo(
    req: operations.SearchTypePointCzoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointCzoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointCzoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_czo";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointCzoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointGcnet - Search API for 'GC-Net Point Data' entry type
  /** 
   * API to search for entries of type GC-Net Point Data
  **/
  SearchTypePointGcnet(
    req: operations.SearchTypePointGcnetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointGcnetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointGcnetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_gcnet";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointGcnetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointGeomagIaga2002 - Search API for 'IAGA 2002 Geomagnetism Data' entry type
  /** 
   * API to search for entries of type IAGA 2002 Geomagnetism Data
  **/
  SearchTypePointGeomagIaga2002(
    req: operations.SearchTypePointGeomagIaga2002Request,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointGeomagIaga2002Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointGeomagIaga2002Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_geomag_iaga2002";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointGeomagIaga2002Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointHydroWaterml - Search API for 'WaterML' entry type
  /** 
   * API to search for entries of type WaterML
  **/
  SearchTypePointHydroWaterml(
    req: operations.SearchTypePointHydroWatermlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointHydroWatermlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointHydroWatermlRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_hydro_waterml";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointHydroWatermlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointIcebridgeAtmIcessn - Search API for 'ATM Ice SSN Data' entry type
  /** 
   * API to search for entries of type ATM Ice SSN Data
  **/
  SearchTypePointIcebridgeAtmIcessn(
    req: operations.SearchTypePointIcebridgeAtmIcessnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointIcebridgeAtmIcessnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointIcebridgeAtmIcessnRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_icebridge_atm_icessn";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointIcebridgeAtmIcessnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointIcebridgeAtmQfit - Search API for 'ATM QFIT Data' entry type
  /** 
   * API to search for entries of type ATM QFIT Data
  **/
  SearchTypePointIcebridgeAtmQfit(
    req: operations.SearchTypePointIcebridgeAtmQfitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointIcebridgeAtmQfitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointIcebridgeAtmQfitRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_icebridge_atm_qfit";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointIcebridgeAtmQfitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointIcebridgeMccordsIrmcr2 - Search API for 'McCords Irmcr2 Data' entry type
  /** 
   * API to search for entries of type McCords Irmcr2 Data
  **/
  SearchTypePointIcebridgeMccordsIrmcr2(
    req: operations.SearchTypePointIcebridgeMccordsIrmcr2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointIcebridgeMccordsIrmcr2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointIcebridgeMccordsIrmcr2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_icebridge_mccords_irmcr2";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointIcebridgeMccordsIrmcr2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointIcebridgeMccordsIrmcr3 - Search API for 'McCords Irmcr3 Data' entry type
  /** 
   * API to search for entries of type McCords Irmcr3 Data
  **/
  SearchTypePointIcebridgeMccordsIrmcr3(
    req: operations.SearchTypePointIcebridgeMccordsIrmcr3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointIcebridgeMccordsIrmcr3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointIcebridgeMccordsIrmcr3Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_icebridge_mccords_irmcr3";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointIcebridgeMccordsIrmcr3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointIcebridgeParis - Search API for 'Paris Data' entry type
  /** 
   * API to search for entries of type Paris Data
  **/
  SearchTypePointIcebridgeParis(
    req: operations.SearchTypePointIcebridgeParisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointIcebridgeParisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointIcebridgeParisRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_icebridge_paris";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointIcebridgeParisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointIdv - Search API for 'IDV Point File' entry type
  /** 
   * API to search for entries of type IDV Point File
  **/
  SearchTypePointIdv(
    req: operations.SearchTypePointIdvRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointIdvResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointIdvRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_idv";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointIdvResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointInline - Search API for 'Inline Point File' entry type
  /** 
   * API to search for entries of type Inline Point File
  **/
  SearchTypePointInline(
    req: operations.SearchTypePointInlineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointInlineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointInlineRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_inline";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointInlineResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointNcdcClimate - Search API for 'NC  DC Climate Data' entry type
  /** 
   * API to search for entries of type NC  DC Climate Data
  **/
  SearchTypePointNcdcClimate(
    req: operations.SearchTypePointNcdcClimateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointNcdcClimateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointNcdcClimateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_ncdc_climate";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointNcdcClimateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointNetcdf - Search API for 'NetCDF Point File' entry type
  /** 
   * API to search for entries of type NetCDF Point File
  **/
  SearchTypePointNetcdf(
    req: operations.SearchTypePointNetcdfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointNetcdfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointNetcdfRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_netcdf";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointNetcdfResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointNoaaCarbon - Search API for 'NOAA Carbon Measurements' entry type
  /** 
   * API to search for entries of type NOAA Carbon Measurements
  **/
  SearchTypePointNoaaCarbon(
    req: operations.SearchTypePointNoaaCarbonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointNoaaCarbonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointNoaaCarbonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_noaa_carbon";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointNoaaCarbonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointNoaaFlaskEvent - Search API for 'NOAA Flask Event Measurements' entry type
  /** 
   * API to search for entries of type NOAA Flask Event Measurements
  **/
  SearchTypePointNoaaFlaskEvent(
    req: operations.SearchTypePointNoaaFlaskEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointNoaaFlaskEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointNoaaFlaskEventRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_noaa_flask_event";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointNoaaFlaskEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointNoaaFlaskMonth - Search API for 'NOAA Flask Month Measurements' entry type
  /** 
   * API to search for entries of type NOAA Flask Month Measurements
  **/
  SearchTypePointNoaaFlaskMonth(
    req: operations.SearchTypePointNoaaFlaskMonthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointNoaaFlaskMonthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointNoaaFlaskMonthRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_noaa_flask_month";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointNoaaFlaskMonthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointNoaaMadis - Search API for 'NOAA MADIS Point Data' entry type
  /** 
   * API to search for entries of type NOAA MADIS Point Data
  **/
  SearchTypePointNoaaMadis(
    req: operations.SearchTypePointNoaaMadisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointNoaaMadisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointNoaaMadisRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_noaa_madis";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointNoaaMadisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointNoaaTower - Search API for 'NOAA Tower Network' entry type
  /** 
   * API to search for entries of type NOAA Tower Network
  **/
  SearchTypePointNoaaTower(
    req: operations.SearchTypePointNoaaTowerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointNoaaTowerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointNoaaTowerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_noaa_tower";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointNoaaTowerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointOceanCnv - Search API for 'SeaBird CNV Data' entry type
  /** 
   * API to search for entries of type SeaBird CNV Data
  **/
  SearchTypePointOceanCnv(
    req: operations.SearchTypePointOceanCnvRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointOceanCnvResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointOceanCnvRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_ocean_cnv";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointOceanCnvResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointOceanCsvSadoTts - Search API for 'SADO TTS Data' entry type
  /** 
   * API to search for entries of type SADO TTS Data
  **/
  SearchTypePointOceanCsvSadoTts(
    req: operations.SearchTypePointOceanCsvSadoTtsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointOceanCsvSadoTtsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointOceanCsvSadoTtsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_ocean_csv_sado_TTS";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointOceanCsvSadoTtsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointOceanCsvSadoMeteo - Search API for 'SADO Meteo Data' entry type
  /** 
   * API to search for entries of type SADO Meteo Data
  **/
  SearchTypePointOceanCsvSadoMeteo(
    req: operations.SearchTypePointOceanCsvSadoMeteoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointOceanCsvSadoMeteoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointOceanCsvSadoMeteoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_ocean_csv_sado_meteo";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointOceanCsvSadoMeteoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointOceanCsvSadoPosition - Search API for 'SADO Position Data' entry type
  /** 
   * API to search for entries of type SADO Position Data
  **/
  SearchTypePointOceanCsvSadoPosition(
    req: operations.SearchTypePointOceanCsvSadoPositionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointOceanCsvSadoPositionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointOceanCsvSadoPositionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_ocean_csv_sado_position";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointOceanCsvSadoPositionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointOceanNetcdfGlider - Search API for 'NetCDF Glider Data' entry type
  /** 
   * API to search for entries of type NetCDF Glider Data
  **/
  SearchTypePointOceanNetcdfGlider(
    req: operations.SearchTypePointOceanNetcdfGliderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointOceanNetcdfGliderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointOceanNetcdfGliderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_ocean_netcdf_glider";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointOceanNetcdfGliderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointOceanNetcdfTrack - Search API for 'NetCDF Track Data' entry type
  /** 
   * API to search for entries of type NetCDF Track Data
  **/
  SearchTypePointOceanNetcdfTrack(
    req: operations.SearchTypePointOceanNetcdfTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointOceanNetcdfTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointOceanNetcdfTrackRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_ocean_netcdf_track";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointOceanNetcdfTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointOceanOoiDmgx - Search API for 'OOI Data' entry type
  /** 
   * API to search for entries of type OOI Data
  **/
  SearchTypePointOceanOoiDmgx(
    req: operations.SearchTypePointOceanOoiDmgxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointOceanOoiDmgxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointOceanOoiDmgxRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_ocean_ooi_dmgx";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointOceanOoiDmgxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointOpenaq - Search API for 'Open AQ Air Quality' entry type
  /** 
   * API to search for entries of type Open AQ Air Quality
  **/
  SearchTypePointOpenaq(
    req: operations.SearchTypePointOpenaqRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointOpenaqResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointOpenaqRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_openaq";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointOpenaqResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointPboPositionTimeSeries - Search API for 'PBO Position Time Series' entry type
  /** 
   * API to search for entries of type PBO Position Time Series
  **/
  SearchTypePointPboPositionTimeSeries(
    req: operations.SearchTypePointPboPositionTimeSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointPboPositionTimeSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointPboPositionTimeSeriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_pbo_position_time_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointPboPositionTimeSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointSimpleRecords - Search API for 'Simple Records' entry type
  /** 
   * API to search for entries of type Simple Records
  **/
  SearchTypePointSimpleRecords(
    req: operations.SearchTypePointSimpleRecordsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointSimpleRecordsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointSimpleRecordsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_simple_records";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointSimpleRecordsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointSnotel - Search API for 'SNOTEL Snow Data' entry type
  /** 
   * API to search for entries of type SNOTEL Snow Data
  **/
  SearchTypePointSnotel(
    req: operations.SearchTypePointSnotelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointSnotelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointSnotelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_snotel";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointSnotelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointText - Search API for 'Record Text File' entry type
  /** 
   * API to search for entries of type Record Text File
  **/
  SearchTypePointText(
    req: operations.SearchTypePointTextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointTextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointTextRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_text";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointTextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePointWsbbGgp - Search API for 'Global Geodynamics GGP Format' entry type
  /** 
   * API to search for entries of type Global Geodynamics GGP Format
  **/
  SearchTypePointWsbbGgp(
    req: operations.SearchTypePointWsbbGgpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointWsbbGgpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointWsbbGgpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_wsbb_ggp";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePointWsbbGgpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypePsdMonthlyClimateIndex - Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type
  /** 
   * API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index
  **/
  SearchTypePsdMonthlyClimateIndex(
    req: operations.SearchTypePsdMonthlyClimateIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePsdMonthlyClimateIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePsdMonthlyClimateIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_psd_monthly_climate_index";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypePsdMonthlyClimateIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeQuandlSeries - Search API for 'QUANDL Series' entry type
  /** 
   * API to search for entries of type QUANDL Series
  **/
  SearchTypeQuandlSeries(
    req: operations.SearchTypeQuandlSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeQuandlSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeQuandlSeriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_quandl_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeQuandlSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeServiceGroup - Search API for 'Service Group' entry type
  /** 
   * API to search for entries of type Service Group
  **/
  SearchTypeServiceGroup(
    req: operations.SearchTypeServiceGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeServiceGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeServiceGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_service_group";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeServiceGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeServiceLink - Search API for 'Service Link' entry type
  /** 
   * API to search for entries of type Service Link
  **/
  SearchTypeServiceLink(
    req: operations.SearchTypeServiceLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeServiceLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeServiceLinkRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_service_link";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeServiceLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeSocrataSeries - Search API for 'SOCRATA Series' entry type
  /** 
   * API to search for entries of type SOCRATA Series
  **/
  SearchTypeSocrataSeries(
    req: operations.SearchTypeSocrataSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeSocrataSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeSocrataSeriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_socrata_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeSocrataSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeSoundingCod - Search API for 'COD Sounding' entry type
  /** 
   * API to search for entries of type COD Sounding
  **/
  SearchTypeSoundingCod(
    req: operations.SearchTypeSoundingCodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeSoundingCodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeSoundingCodRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_sounding_cod";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeSoundingCodResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeSoundingFrd - Search API for 'FRD Sounding' entry type
  /** 
   * API to search for entries of type FRD Sounding
  **/
  SearchTypeSoundingFrd(
    req: operations.SearchTypeSoundingFrdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeSoundingFrdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeSoundingFrdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_sounding_frd";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeSoundingFrdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeSoundingGsd - Search API for 'GSD Sounding' entry type
  /** 
   * API to search for entries of type GSD Sounding
  **/
  SearchTypeSoundingGsd(
    req: operations.SearchTypeSoundingGsdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeSoundingGsdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeSoundingGsdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_sounding_gsd";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeSoundingGsdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeSoundingWyoming - Search API for 'UW Sounding' entry type
  /** 
   * API to search for entries of type UW Sounding
  **/
  SearchTypeSoundingWyoming(
    req: operations.SearchTypeSoundingWyomingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeSoundingWyomingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeSoundingWyomingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_sounding_wyoming";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeSoundingWyomingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeTmy - Search API for 'NREL TMY Data' entry type
  /** 
   * API to search for entries of type NREL TMY Data
  **/
  SearchTypeTmy(
    req: operations.SearchTypeTmyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeTmyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeTmyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_tmy";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeTmyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeTweet - Search API for 'Tweet' entry type
  /** 
   * API to search for entries of type Tweet
  **/
  SearchTypeTweet(
    req: operations.SearchTypeTweetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeTweetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeTweetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_tweet";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeTweetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeUsgsGauge - Search API for 'USGS Stream Gauge' entry type
  /** 
   * API to search for entries of type USGS Stream Gauge
  **/
  SearchTypeUsgsGauge(
    req: operations.SearchTypeUsgsGaugeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeUsgsGaugeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeUsgsGaugeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_usgs_gauge";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeUsgsGaugeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeVirtual - Search API for 'Virtual Group' entry type
  /** 
   * API to search for entries of type Virtual Group
  **/
  SearchTypeVirtual(
    req: operations.SearchTypeVirtualRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeVirtualResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeVirtualRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_virtual";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeVirtualResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeWmsCapabilities - Search API for 'WMS Capabilities' entry type
  /** 
   * API to search for entries of type WMS Capabilities
  **/
  SearchTypeWmsCapabilities(
    req: operations.SearchTypeWmsCapabilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeWmsCapabilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeWmsCapabilitiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_wms_capabilities";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeWmsCapabilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchTypeWmsLayer - Search API for 'WMS Layer' entry type
  /** 
   * API to search for entries of type WMS Layer
  **/
  SearchTypeWmsLayer(
    req: operations.SearchTypeWmsLayerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypeWmsLayerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypeWmsLayerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_wms_layer";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchTypeWmsLayerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchUfoSightings - Search API for 'Ufo Sightings' entry type
  /** 
   * API to search for entries of type Ufo Sightings
  **/
  SearchUfoSightings(
    req: operations.SearchUfoSightingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchUfoSightingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchUfoSightingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/ufo_sightings";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchUfoSightingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchUsPlaces - Search API for 'US Places' entry type
  /** 
   * API to search for entries of type US Places
  **/
  SearchUsPlaces(
    req: operations.SearchUsPlacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchUsPlacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchUsPlacesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/us_places";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchUsPlacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchVoteYesno - Search API for 'Simple Yes-No Vote' entry type
  /** 
   * API to search for entries of type Simple Yes-No Vote
  **/
  SearchVoteYesno(
    req: operations.SearchVoteYesnoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchVoteYesnoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchVoteYesnoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/vote_yesno";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchVoteYesnoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchWeblog - Search API for 'Weblog' entry type
  /** 
   * API to search for entries of type Weblog
  **/
  SearchWeblog(
    req: operations.SearchWeblogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchWeblogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchWeblogRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/weblog";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchWeblogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchWikipage - Search API for 'Wiki Page' entry type
  /** 
   * API to search for entries of type Wiki Page
  **/
  SearchWikipage(
    req: operations.SearchWikipageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchWikipageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchWikipageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/wikipage";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.SearchWikipageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
