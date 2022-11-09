import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceUpdate } from "./serviceupdate";


export class DescribeServiceUpdatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServiceUpdates", elemType: shared.ServiceUpdate })
  serviceUpdates?: ServiceUpdate[];
}
