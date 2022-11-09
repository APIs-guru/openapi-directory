import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbParameterGroup
/** 
 * Provides information about a parameter group for a DB instance.
**/
export class AwsRdsDbParameterGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=DbParameterGroupName" })
  dbParameterGroupName?: string;

  @Metadata({ data: "json, name=ParameterApplyStatus" })
  parameterApplyStatus?: string;
}
