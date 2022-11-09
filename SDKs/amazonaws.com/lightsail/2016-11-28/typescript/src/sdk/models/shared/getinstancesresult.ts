import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Instance } from "./instance";


export class GetInstancesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=instances", elemType: shared.Instance })
  instances?: Instance[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
