import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserGeneralUser } from "./usergeneraluser";
import { ContentCommentSummary } from "./contentcommentsummary";
import { ContentContentRepresentation } from "./contentcontentrepresentation";



export class ContentContentItemPublicContract extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowComments?: boolean;

  @SpeakeasyMetadata()
  author?: UserGeneralUser;

  @SpeakeasyMetadata()
  autoEnglishPropertyFallback?: boolean;

  @SpeakeasyMetadata()
  cType?: string;

  @SpeakeasyMetadata()
  cmsPath?: string;

  @SpeakeasyMetadata()
  commentSummary?: ContentCommentSummary;

  @SpeakeasyMetadata()
  contentId?: number;

  @SpeakeasyMetadata()
  creationDate?: Date;

  @SpeakeasyMetadata()
  hasAgeGate?: boolean;

  @SpeakeasyMetadata()
  minimumAge?: number;

  @SpeakeasyMetadata()
  modifyDate?: Date;

  @SpeakeasyMetadata()
  properties?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  ratingImagePath?: string;

  @SpeakeasyMetadata({ elemType: ContentContentRepresentation })
  representations?: ContentContentRepresentation[];

  @SpeakeasyMetadata()
  tags?: string[];
}
