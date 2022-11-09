import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Service } from "./service";


export class GetServiceGraphResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainsOldGroupVersions" })
  containsOldGroupVersions?: boolean;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Services", elemType: shared.Service })
  services?: Service[];

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
