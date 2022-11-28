import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatisticsResponseMonthwiseRegistationsDetails2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=month" })
  month?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}


// GetStatisticsResponseMonthwiseRegistations
/** 
 * List of last 12 months cumulative user registrations
**/
export class GetStatisticsResponseMonthwiseRegistations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=details2" })
  details2?: GetStatisticsResponseMonthwiseRegistationsDetails2;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=month" })
  month?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}


export class GetStatisticsResponseYearwiseAuthenticDocumentsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}


export class GetStatisticsResponseYearwiseAuthenticDocumentsDetails1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}


export class GetStatisticsResponseYearwiseAuthenticDocumentsDetails2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}


// GetStatisticsResponseYearwiseAuthenticDocuments
/** 
 * List of cumulative year-wise counts of authentic documents in DigiLocker.
**/
export class GetStatisticsResponseYearwiseAuthenticDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: GetStatisticsResponseYearwiseAuthenticDocumentsDetails;

  @SpeakeasyMetadata({ data: "json, name=details1" })
  details1?: GetStatisticsResponseYearwiseAuthenticDocumentsDetails1;

  @SpeakeasyMetadata({ data: "json, name=details2" })
  details2?: GetStatisticsResponseYearwiseAuthenticDocumentsDetails2;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}


export class GetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentic_documents" })
  authenticDocuments: string;

  @SpeakeasyMetadata({ data: "json, name=count_as_on" })
  countAsOn: string;

  @SpeakeasyMetadata({ data: "json, name=issuers" })
  issuers: string;

  @SpeakeasyMetadata({ data: "json, name=monthwise_registations" })
  monthwiseRegistations: GetStatisticsResponseMonthwiseRegistations;

  @SpeakeasyMetadata({ data: "json, name=requestors" })
  requestors: string;

  @SpeakeasyMetadata({ data: "json, name=users" })
  users: string;

  @SpeakeasyMetadata({ data: "json, name=yearwise_authentic_documents" })
  yearwiseAuthenticDocuments: GetStatisticsResponseYearwiseAuthenticDocuments;
}
