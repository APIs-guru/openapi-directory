var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDefinitionsDestinyMaterialRequirement } from "./destinydefinitionsdestinymaterialrequirement";
import { DestinyDestinyStat } from "./destinydestinystat";
// DestinyDestinyTalentNodeNodeStatsBlock
/**
 * This property has some history. A talent grid can provide stats on both the item it's related to and the character equipping the item. This returns data about those stat bonuses.
**/
var DestinyDestinyTalentNodeNodeStatsBlock = /** @class */ (function (_super) {
    __extends(DestinyDestinyTalentNodeNodeStatsBlock, _super);
    function DestinyDestinyTalentNodeNodeStatsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyStat }),
        __metadata("design:type", Array)
    ], DestinyDestinyTalentNodeNodeStatsBlock.prototype, "currentStepStats", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyStat }),
        __metadata("design:type", Array)
    ], DestinyDestinyTalentNodeNodeStatsBlock.prototype, "nextStepStats", void 0);
    return DestinyDestinyTalentNodeNodeStatsBlock;
}(SpeakeasyBase));
export { DestinyDestinyTalentNodeNodeStatsBlock };
// DestinyDestinyTalentNode
/**
 * I see you've come to find out more about Talent Nodes. I'm so sorry. Talent Nodes are the conceptual, visual nodes that appear on Talent Grids. Talent Grids, in Destiny 1, were found on almost every instanced item: they had Nodes that could be activated to change the properties of the item. In Destiny 2, Talent Grids only exist for Builds/Subclasses, and while the basic concept is the same (Nodes can be activated once you've gained sufficient Experience on the Item, and provide effects), there are some new concepts from Destiny 1. Examine DestinyTalentGridDefinition and its subordinates for more information. This is the "Live" information for the current status of a Talent Node on a specific item. Talent Nodes have many Steps, but only one can be active at any one time: and it is the Step that determines both the visual and the game state-changing properties that the Node provides. Examine this and DestinyTalentNodeStepDefinition carefully. *IMPORTANT NOTE* Talent Nodes are, unfortunately, Content Version DEPENDENT. Though they refer to hashes for Nodes and Steps, those hashes are not guaranteed to be immutable across content versions. This is a source of great exasperation for me, but as a result anyone using Talent Grid data must ensure that the content version of their static content matches that of the server responses before showing or making decisions based on talent grid data.
**/
var DestinyDestinyTalentNode = /** @class */ (function (_super) {
    __extends(DestinyDestinyTalentNode, _super);
    function DestinyDestinyTalentNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyTalentNode.prototype, "activationGridLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyDestinyTalentNode.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyDestinyTalentNode.prototype, "isActivated", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDefinitionsDestinyMaterialRequirement }),
        __metadata("design:type", Array)
    ], DestinyDestinyTalentNode.prototype, "materialsToUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyTalentNode.prototype, "nodeHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyTalentNode.prototype, "nodeIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyDestinyTalentNodeNodeStatsBlock)
    ], DestinyDestinyTalentNode.prototype, "nodeStatsBlock", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyTalentNode.prototype, "progressPercent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyTalentNode.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDestinyTalentNode.prototype, "stepIndex", void 0);
    return DestinyDestinyTalentNode;
}(SpeakeasyBase));
export { DestinyDestinyTalentNode };
