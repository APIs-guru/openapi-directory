import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetPublicMilestoneContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=milestoneHash" })
  milestoneHash: number;
}


export class Destiny2GetPublicMilestoneContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetPublicMilestoneContentPathParams;
}


export class Destiny2GetPublicMilestoneContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
