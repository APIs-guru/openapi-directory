import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiResource } from "./apiresource";
import { Links } from "./links";
import { Meta } from "./meta";


export class GetApiResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: ApiResource;

  @Metadata({ data: "json, name=links" })
  links?: Links;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
