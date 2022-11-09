import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=registrationDate" })
  registrationDate: Date;

  @Metadata({ data: "json, name=type" })
  type: string;
}
