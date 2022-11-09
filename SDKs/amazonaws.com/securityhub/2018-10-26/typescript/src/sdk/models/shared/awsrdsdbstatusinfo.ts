import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbStatusInfo
/** 
 * Information about the status of a read replica.
**/
export class AwsRdsDbStatusInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Normal" })
  normal?: boolean;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=StatusType" })
  statusType?: string;
}
