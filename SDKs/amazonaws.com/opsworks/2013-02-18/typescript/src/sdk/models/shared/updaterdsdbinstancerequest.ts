import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateRdsDbInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DbPassword" })
  dbPassword?: string;

  @Metadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @Metadata({ data: "json, name=RdsDbInstanceArn" })
  rdsDbInstanceArn: string;
}
