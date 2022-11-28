import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IErrorInfo } from "./ierrorinfo";
import { InvoiceCategoryApiModel } from "./invoicecategoryapimodel";



export class ListResultInvoiceCategoryApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessages", elemType: IErrorInfo })
  errorMessages?: IErrorInfo[];

  @SpeakeasyMetadata({ data: "json, name=IsFaulted" })
  isFaulted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Result", elemType: InvoiceCategoryApiModel })
  result?: InvoiceCategoryApiModel[];

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
