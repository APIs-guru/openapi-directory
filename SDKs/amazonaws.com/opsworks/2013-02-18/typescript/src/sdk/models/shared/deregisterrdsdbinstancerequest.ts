import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterRdsDbInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RdsDbInstanceArn" })
  rdsDbInstanceArn: string;
}
