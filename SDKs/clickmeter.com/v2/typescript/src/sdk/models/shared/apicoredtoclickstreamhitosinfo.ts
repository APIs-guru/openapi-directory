import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoClickStreamHitOsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyId" })
  familyId?: number;

  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
