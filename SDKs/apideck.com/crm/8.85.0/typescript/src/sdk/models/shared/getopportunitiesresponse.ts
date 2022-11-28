import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Opportunity } from "./opportunity";
import { Links } from "./links";
import { Meta } from "./meta";



export class GetOpportunitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Opportunity })
  data: Opportunity[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
