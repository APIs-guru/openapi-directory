import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";



export class DescribeServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FormatVersion" })
  formatVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Services", elemType: Service })
  services?: Service[];
}
