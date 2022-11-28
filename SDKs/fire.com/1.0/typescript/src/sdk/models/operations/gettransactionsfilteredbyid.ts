import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsFilteredByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ican" })
  ican: number;
}


export class GetTransactionsFilteredByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRangeFrom" })
  dateRangeFrom: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRangeTo" })
  dateRangeTo: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchKeyword" })
  searchKeyword: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transactionTypes" })
  transactionTypes: string[];
}


export class GetTransactionsFilteredByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionsFilteredByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTransactionsFilteredByIdQueryParams;
}


export class GetTransactionsFilteredByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema?: shared.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema;
}
