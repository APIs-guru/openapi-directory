import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterRdsDbInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DbPassword" })
  dbPassword: string;

  @Metadata({ data: "json, name=DbUser" })
  dbUser: string;

  @Metadata({ data: "json, name=RdsDbInstanceArn" })
  rdsDbInstanceArn: string;

  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}
