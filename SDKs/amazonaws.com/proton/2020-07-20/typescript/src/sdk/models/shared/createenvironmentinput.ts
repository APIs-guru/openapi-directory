import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateEnvironmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentAccountConnectionId" })
  environmentAccountConnectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protonServiceRoleArn" })
  protonServiceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=templateMajorVersion" })
  templateMajorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=templateMinorVersion" })
  templateMinorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
