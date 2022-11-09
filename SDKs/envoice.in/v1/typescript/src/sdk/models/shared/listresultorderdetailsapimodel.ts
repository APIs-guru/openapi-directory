import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IErrorInfo } from "./ierrorinfo";
import { OrderDetailsApiModel } from "./orderdetailsapimodel";


export class ListResultOrderDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=ErrorMessages", elemType: shared.IErrorInfo })
  errorMessages?: IErrorInfo[];

  @Metadata({ data: "json, name=IsFaulted" })
  isFaulted?: boolean;

  @Metadata({ data: "json, name=Result", elemType: shared.OrderDetailsApiModel })
  result?: OrderDetailsApiModel[];

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
