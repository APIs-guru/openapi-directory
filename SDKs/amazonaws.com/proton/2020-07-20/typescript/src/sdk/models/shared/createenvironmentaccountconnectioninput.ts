import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEnvironmentAccountConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentName" })
  environmentName: string;

  @SpeakeasyMetadata({ data: "json, name=managementAccountId" })
  managementAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
