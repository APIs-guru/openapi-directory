import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateEnvironmentAccountConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
