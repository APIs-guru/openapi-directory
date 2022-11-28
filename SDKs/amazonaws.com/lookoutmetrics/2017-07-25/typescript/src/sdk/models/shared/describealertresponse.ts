import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alert } from "./alert";



export class DescribeAlertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alert" })
  alert?: Alert;
}
