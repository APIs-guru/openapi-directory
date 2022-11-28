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
import { BlockTypeEnum } from "./blocktypeenum";
import { Geometry } from "./geometry";
import { Relationship } from "./relationship";
import { SelectionStatusEnum } from "./selectionstatusenum";
import { TextTypeEnum } from "./texttypeenum";
// Block
/**
 * <p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> object depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables, and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p>
**/
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockType" }),
        __metadata("design:type", String)
    ], Block.prototype, "blockType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColumnIndex" }),
        __metadata("design:type", Number)
    ], Block.prototype, "columnIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ColumnSpan" }),
        __metadata("design:type", Number)
    ], Block.prototype, "columnSpan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Confidence" }),
        __metadata("design:type", Number)
    ], Block.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EntityTypes" }),
        __metadata("design:type", Array)
    ], Block.prototype, "entityTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Geometry" }),
        __metadata("design:type", Geometry)
    ], Block.prototype, "geometry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Block.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Page" }),
        __metadata("design:type", Number)
    ], Block.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Relationships", elemType: Relationship }),
        __metadata("design:type", Array)
    ], Block.prototype, "relationships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RowIndex" }),
        __metadata("design:type", Number)
    ], Block.prototype, "rowIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RowSpan" }),
        __metadata("design:type", Number)
    ], Block.prototype, "rowSpan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SelectionStatus" }),
        __metadata("design:type", String)
    ], Block.prototype, "selectionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Text" }),
        __metadata("design:type", String)
    ], Block.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TextType" }),
        __metadata("design:type", String)
    ], Block.prototype, "textType", void 0);
    return Block;
}(SpeakeasyBase));
export { Block };
