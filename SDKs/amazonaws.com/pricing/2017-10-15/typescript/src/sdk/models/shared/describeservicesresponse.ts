import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Service } from "./service";


export class DescribeServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FormatVersion" })
  formatVersion?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Services", elemType: shared.Service })
  services?: Service[];
}
