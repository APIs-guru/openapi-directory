import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppFlowConfig
/** 
 * Details about an Amazon AppFlow flow datasource.
**/
export class AppFlowConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=FlowName" })
  flowName: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
