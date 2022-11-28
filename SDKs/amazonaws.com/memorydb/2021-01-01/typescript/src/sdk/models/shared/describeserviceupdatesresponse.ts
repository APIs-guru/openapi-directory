import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdate } from "./serviceupdate";



export class DescribeServiceUpdatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceUpdates", elemType: ServiceUpdate })
  serviceUpdates?: ServiceUpdate[];
}
