import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatisticsResponseMonthwiseRegistationsDetails2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=month" })
  month?: number;

  @Metadata({ data: "json, name=year" })
  year?: number;
}


// GetStatisticsResponseMonthwiseRegistations
/** 
 * List of last 12 months cumulative user registrations
**/
export class GetStatisticsResponseMonthwiseRegistations extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=details2" })
  details2?: GetStatisticsResponseMonthwiseRegistationsDetails2;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=month" })
  month?: number;

  @Metadata({ data: "json, name=year" })
  year?: number;
}


export class GetStatisticsResponseYearwiseAuthenticDocumentsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=year" })
  year?: number;
}


export class GetStatisticsResponseYearwiseAuthenticDocumentsDetails1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=year" })
  year?: number;
}


export class GetStatisticsResponseYearwiseAuthenticDocumentsDetails2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=year" })
  year?: number;
}


// GetStatisticsResponseYearwiseAuthenticDocuments
/** 
 * List of cumulative year-wise counts of authentic documents in DigiLocker.
**/
export class GetStatisticsResponseYearwiseAuthenticDocuments extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=details" })
  details?: GetStatisticsResponseYearwiseAuthenticDocumentsDetails;

  @Metadata({ data: "json, name=details1" })
  details1?: GetStatisticsResponseYearwiseAuthenticDocumentsDetails1;

  @Metadata({ data: "json, name=details2" })
  details2?: GetStatisticsResponseYearwiseAuthenticDocumentsDetails2;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=year" })
  year?: number;
}


export class GetStatisticsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentic_documents" })
  authenticDocuments: string;

  @Metadata({ data: "json, name=count_as_on" })
  countAsOn: string;

  @Metadata({ data: "json, name=issuers" })
  issuers: string;

  @Metadata({ data: "json, name=monthwise_registations" })
  monthwiseRegistations: GetStatisticsResponseMonthwiseRegistations;

  @Metadata({ data: "json, name=requestors" })
  requestors: string;

  @Metadata({ data: "json, name=users" })
  users: string;

  @Metadata({ data: "json, name=yearwise_authentic_documents" })
  yearwiseAuthenticDocuments: GetStatisticsResponseYearwiseAuthenticDocuments;
}
