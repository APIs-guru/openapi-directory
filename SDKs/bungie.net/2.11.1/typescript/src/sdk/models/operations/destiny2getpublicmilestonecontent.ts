import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetPublicMilestoneContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=milestoneHash" })
  milestoneHash: number;
}


export class Destiny2GetPublicMilestoneContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetPublicMilestoneContentPathParams;
}


export class Destiny2GetPublicMilestoneContentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
