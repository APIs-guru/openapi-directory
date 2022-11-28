import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Actor } from "./actor";
import { IssueComment } from "./issuecomment";
import { IssueSimple } from "./issuesimple";



export class EventPayloadPages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page_name" })
  pageName?: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class EventPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: IssueComment;

  @SpeakeasyMetadata({ data: "json, name=issue" })
  issue?: IssueSimple;

  @SpeakeasyMetadata({ data: "json, name=pages", elemType: EventPayloadPages })
  pages?: EventPayloadPages[];
}


export class EventRepo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


// Event
/** 
 * Event
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: Actor;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=org" })
  org?: Actor;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload: EventPayload;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo: EventRepo;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
