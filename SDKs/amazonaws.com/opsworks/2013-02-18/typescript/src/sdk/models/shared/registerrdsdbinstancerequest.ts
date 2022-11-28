import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterRdsDbInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DbPassword" })
  dbPassword: string;

  @SpeakeasyMetadata({ data: "json, name=DbUser" })
  dbUser: string;

  @SpeakeasyMetadata({ data: "json, name=RdsDbInstanceArn" })
  rdsDbInstanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}
