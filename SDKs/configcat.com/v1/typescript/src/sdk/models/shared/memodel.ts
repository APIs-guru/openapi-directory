import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MeModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;
}
