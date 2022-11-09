import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResourceOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
