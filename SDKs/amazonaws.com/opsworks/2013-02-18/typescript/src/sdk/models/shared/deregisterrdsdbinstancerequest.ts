import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterRdsDbInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RdsDbInstanceArn" })
  rdsDbInstanceArn: string;
}
