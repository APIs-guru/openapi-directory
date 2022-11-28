import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IErrorInfo } from "./ierrorinfo";
import { EstimationDetailsApiModel } from "./estimationdetailsapimodel";



export class ListResultEstimationDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessages", elemType: IErrorInfo })
  errorMessages?: IErrorInfo[];

  @SpeakeasyMetadata({ data: "json, name=IsFaulted" })
  isFaulted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Result", elemType: EstimationDetailsApiModel })
  result?: EstimationDetailsApiModel[];

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
