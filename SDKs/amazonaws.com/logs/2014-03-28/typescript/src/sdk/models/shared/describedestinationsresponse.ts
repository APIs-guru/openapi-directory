import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Destination } from "./destination";


export class DescribeDestinationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: shared.Destination })
  destinations?: Destination[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
