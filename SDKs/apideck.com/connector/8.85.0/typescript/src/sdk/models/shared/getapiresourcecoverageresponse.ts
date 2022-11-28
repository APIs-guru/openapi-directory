import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiResourceCoverage } from "./apiresourcecoverage";
import { Links } from "./links";
import { Meta } from "./meta";



export class GetApiResourceCoverageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ApiResourceCoverage;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
