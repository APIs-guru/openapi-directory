import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Alert } from "./alert";


export class DescribeAlertResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alert" })
  alert?: Alert;
}
