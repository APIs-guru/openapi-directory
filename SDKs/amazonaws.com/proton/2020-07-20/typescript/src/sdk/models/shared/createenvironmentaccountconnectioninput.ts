import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEnvironmentAccountConnectionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=environmentName" })
  environmentName: string;

  @Metadata({ data: "json, name=managementAccountId" })
  managementAccountId: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
