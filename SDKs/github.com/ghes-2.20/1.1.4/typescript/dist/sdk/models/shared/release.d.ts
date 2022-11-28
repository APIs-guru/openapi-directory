import { SpeakeasyBase } from "../../../internal/utils";
import { ReleaseAsset } from "./releaseasset";
import { SimpleUser } from "./simpleuser";
import { ReactionRollup } from "./reactionrollup";
/**
 * A release.
**/
export declare class Release extends SpeakeasyBase {
    assets: ReleaseAsset[];
    assetsUrl: string;
    author: SimpleUser;
    body?: string;
    bodyHtml?: string;
    bodyText?: string;
    createdAt: Date;
    draft: boolean;
    htmlUrl: string;
    id: number;
    name: string;
    nodeId: string;
    prerelease: boolean;
    publishedAt: Date;
    reactions?: ReactionRollup;
    tagName: string;
    tarballUrl: string;
    targetCommitish: string;
    uploadUrl: string;
    url: string;
    zipballUrl: string;
}
