from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization:
    r"""DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization
    This is actually something that Spasm.js *doesn't* do right now, and that we don't return assets for yet. This is the data about what character customization options you picked. You can combine this with DestinyCharacterCustomizationOptionDefinition to show some cool info, and hopefully someday to actually render a user's face in 3D. We'll see if we ever end up with time for that.
    """
    
    decal_color: Optional[int] = field(default=None)
    decal_index: Optional[int] = field(default=None)
    eye_color: Optional[int] = field(default=None)
    face: Optional[int] = field(default=None)
    feature_colors: Optional[List[int]] = field(default=None)
    feature_index: Optional[int] = field(default=None)
    hair_colors: Optional[List[int]] = field(default=None)
    hair_index: Optional[int] = field(default=None)
    lip_color: Optional[int] = field(default=None)
    personality: Optional[int] = field(default=None)
    skin_color: Optional[int] = field(default=None)
    wear_helmet: Optional[bool] = field(default=None)
    

@dataclass
class DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView:
    r"""DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView
    A minimal view of:
    - Equipped items
    - The rendering-related custom options on those equipped items
    Combined, that should be enough to render all of the items on the equipped character.
    """
    
    equipment: Optional[List[DestinyCharacterDestinyItemPeerView]] = field(default=None)
    

@dataclass
class DestinyEntitiesCharactersDestinyCharacterRenderComponent:
    r"""DestinyEntitiesCharactersDestinyCharacterRenderComponent
    Only really useful if you're attempting to render the character's current appearance in 3D, this returns a bare minimum of information, pre-aggregated, that you'll need to perform that rendering. Note that you need to combine this with other 3D assets and data from our servers.
    Examine the Javascript returned by https://bungie.net/sharedbundle/spasm to see how we use this data, but be warned: the rabbit hole goes pretty deep.
    """
    
    custom_dyes: Optional[List[DestinyDyeReference]] = field(default=None)
    customization: Optional[DestinyEntitiesCharactersDestinyCharacterRenderComponentCustomization] = field(default=None)
    peer_view: Optional[DestinyEntitiesCharactersDestinyCharacterRenderComponentPeerView] = field(default=None)
    
