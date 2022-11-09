import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Actor } from "./actor";
import { Actor } from "./actor";
import { IssueComment } from "./issuecomment";
import { IssueSimple } from "./issuesimple";


export class EventPayloadPages extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=page_name" })
  pageName?: string;

  @Metadata({ data: "json, name=sha" })
  sha?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class EventPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: string;

  @Metadata({ data: "json, name=comment" })
  comment?: IssueComment;

  @Metadata({ data: "json, name=issue" })
  issue?: IssueSimple;

  @Metadata({ data: "json, name=pages", elemType: shared.EventPayloadPages })
  pages?: EventPayloadPages[];
}


export class EventRepo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// Event
/** 
 * Event
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=actor" })
  actor: Actor;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=org" })
  org?: Actor;

  @Metadata({ data: "json, name=payload" })
  payload: EventPayload;

  @Metadata({ data: "json, name=public" })
  public: boolean;

  @Metadata({ data: "json, name=repo" })
  repo: EventRepo;

  @Metadata({ data: "json, name=type" })
  type: string;
}
