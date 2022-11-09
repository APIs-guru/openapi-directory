import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsFilteredByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ican" })
  ican: number;
}


export class GetTransactionsFilteredByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dateRangeFrom" })
  dateRangeFrom: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateRangeTo" })
  dateRangeTo: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchKeyword" })
  searchKeyword: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transactionTypes" })
  transactionTypes: string[];
}


export class GetTransactionsFilteredByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionsFilteredByIdPathParams;

  @Metadata()
  queryParams: GetTransactionsFilteredByIdQueryParams;
}


export class GetTransactionsFilteredByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema?: shared.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema;
}
