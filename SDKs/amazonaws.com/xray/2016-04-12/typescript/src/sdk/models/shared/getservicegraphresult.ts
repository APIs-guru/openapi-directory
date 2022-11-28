import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";



export class GetServiceGraphResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainsOldGroupVersions" })
  containsOldGroupVersions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Services", elemType: Service })
  services?: Service[];

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
