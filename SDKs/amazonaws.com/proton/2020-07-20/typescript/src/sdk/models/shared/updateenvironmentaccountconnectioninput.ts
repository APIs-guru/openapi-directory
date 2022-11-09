import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateEnvironmentAccountConnectionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
