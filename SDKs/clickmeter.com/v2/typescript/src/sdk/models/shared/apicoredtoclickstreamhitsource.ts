import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoClickStreamHitSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=param" })
  param?: string;
}
