import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlayerAssets extends SpeakeasyBase {
    link?: string;
    logo?: string;
}
export declare class Player extends SpeakeasyBase {
    assets?: PlayerAssets;
    backgroundBottom?: string;
    backgroundText?: string;
    backgroundTop?: string;
    createdAt?: Date;
    enableApi?: boolean;
    enableControls?: boolean;
    forceAutoplay?: boolean;
    forceLoop?: boolean;
    hideTitle?: boolean;
    link?: string;
    linkActive?: string;
    linkHover?: string;
    playerId?: string;
    shapeAspect?: string;
    shapeBackgroundBottom?: string;
    shapeBackgroundTop?: string;
    shapeMargin?: number;
    shapeRadius?: number;
    text?: string;
    trackBackground?: string;
    trackPlayed?: string;
    trackUnplayed?: string;
    updatedAt?: Date;
}
