import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StackConfigurationManager } from "./stackconfigurationmanager";


export class DescribeAgentVersionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationManager" })
  configurationManager?: StackConfigurationManager;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
