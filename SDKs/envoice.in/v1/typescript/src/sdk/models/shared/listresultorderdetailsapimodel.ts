import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IErrorInfo } from "./ierrorinfo";
import { OrderDetailsApiModel } from "./orderdetailsapimodel";



export class ListResultOrderDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessages", elemType: IErrorInfo })
  errorMessages?: IErrorInfo[];

  @SpeakeasyMetadata({ data: "json, name=IsFaulted" })
  isFaulted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Result", elemType: OrderDetailsApiModel })
  result?: OrderDetailsApiModel[];

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
