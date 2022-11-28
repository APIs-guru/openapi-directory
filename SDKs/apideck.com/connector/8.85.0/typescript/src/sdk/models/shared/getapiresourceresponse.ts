import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiResource } from "./apiresource";
import { Links } from "./links";
import { Meta } from "./meta";



export class GetApiResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ApiResource;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
